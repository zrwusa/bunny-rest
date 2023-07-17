import {NextFunction, Request, Response} from 'express';
import {verifyJwt} from '../helpers/jwt';
import {findSessions, reIssueAccessToken} from '../services/session-service';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import {BL} from '../helpers/biz-logics';

const jwtAuth = async (req: Request, res: Response, next: NextFunction) => {
    const accessTokenRaw = req.headers.authorization;
    if (typeof accessTokenRaw !== 'string') {
        return wrapSend(res, RESTFul.unauthorized, BL.ACCESS_TOKEN_MALFORMED);
    }
    const accessToken = accessTokenRaw.replace(/^Bearer\s/, '');
    if (accessToken) {
        const {decoded, expired} = verifyJwt(accessToken);
        if (decoded) {
            res.locals.user = decoded;
            const userSession = await findSessions({user_id: res.locals.user.id});
            // We can implement more features here, e.g. blacklist
            if (!userSession) {
                return wrapSend(res, RESTFul.unauthorized, BL.SESSION_NOT_EXIST);
            } else {
                return next();
            }
        } else if (expired) {
            const refreshToken = req.headers['x-refresh'];
            if (refreshToken && typeof refreshToken === 'string') {
                const {expired} = verifyJwt(refreshToken);
                if (expired) {
                    return wrapSend(res, RESTFul.unauthorized, BL.REFRESH_TOKEN_EXPIRED);
                }

                const newAccessToken = await reIssueAccessToken({refreshToken});
                if (newAccessToken && typeof newAccessToken === 'string') {
                    res.setHeader('x-access-token', newAccessToken);
                    const result = verifyJwt(newAccessToken as string);

                    res.locals.user = result.decoded;
                    return next();
                } else {
                    return wrapSend(res, RESTFul.unauthorized, BL.REISSUE_ACCESS_TOKEN_FAILED);
                }
            } else {
                return wrapSend(res, RESTFul.unauthorized, BL.REFRESH_TOKEN_NOT_PROVIDED);
            }
        } else {
            return wrapSend(res, RESTFul.unauthorized, BL.REFRESH_TOKEN_MALFORMED);
        }
    } else {
        return wrapSend(res, RESTFul.unauthorized, BL.ACCESS_TOKEN_NOT_PROVIDED);
    }
};

export default jwtAuth;
