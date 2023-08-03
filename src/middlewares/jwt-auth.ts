import type {NextFunction, Request, Response} from 'express';
import {verifyJwt} from '../helpers';
import {findSession, reIssueAccessToken} from '../services';
import {httpStatusMap} from '../constants/http-status-map';
import {wrapSend} from '../helpers';
import {BL} from '../constants';

export const jwtAuth = async (req: Request, res: Response, next: NextFunction) => {
    const accessTokenRaw = req.headers.authorization;
    if (typeof accessTokenRaw !== 'string') {
        return wrapSend(res, httpStatusMap.unauthorized, BL.ACCESS_TOKEN_MALFORMED);
    }
    const accessToken = accessTokenRaw.replace(/^Bearer\s/, '');
    if (accessToken) {
        const {decoded, expired} = verifyJwt(accessToken);
        if (decoded) {
            res.locals.user = decoded;
            const userSession = await findSession({user_id: res.locals.user.id});
            // We can implement more features here, e.g. blacklist
            if (!userSession) {
                return wrapSend(res, httpStatusMap.unauthorized, BL.SESSION_NOT_EXIST);
            } else {
                return next();
            }
        } else if (expired) {
            const refreshToken = req.headers['x-refresh'];
            if (refreshToken && typeof refreshToken === 'string') {
                const {expired} = verifyJwt(refreshToken);
                if (expired) {
                    return wrapSend(res, httpStatusMap.unauthorized, BL.REFRESH_TOKEN_EXPIRED);
                }

                const newAccessToken = await reIssueAccessToken(refreshToken);
                if (newAccessToken && typeof newAccessToken === 'string') {
                    res.setHeader('x-access-token', newAccessToken);
                    const result = verifyJwt(newAccessToken as string);

                    res.locals.user = result.decoded;
                    return next();
                } else {
                    return wrapSend(res, httpStatusMap.unauthorized, BL.REISSUE_ACCESS_TOKEN_FAILED);
                }
            } else {
                return wrapSend(res, httpStatusMap.unauthorized, BL.REFRESH_TOKEN_NOT_PROVIDED);
            }
        } else {
            return wrapSend(res, httpStatusMap.unauthorized, BL.REFRESH_TOKEN_MALFORMED);
        }
    } else {
        return wrapSend(res, httpStatusMap.unauthorized, BL.ACCESS_TOKEN_NOT_PROVIDED);
    }
};

export default jwtAuth;
