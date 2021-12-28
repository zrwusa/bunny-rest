import {get} from 'lodash';
import {NextFunction, Request, Response} from 'express';
import {verifyJwt} from '../utils/jwt';
import {reIssueAccessToken} from '../services/session-service';
import {unauthorized} from '../utils/rest-maker';
import {wrapSend} from '../helpers/protocol';

const jwtAuth = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
    if (accessToken) {
        const {decoded, expired} = verifyJwt(accessToken);

        if (decoded) {
            res.locals.user = decoded;
            return next();
        } else if (expired) {
            const refreshToken = get(req, 'headers.x-refresh');
            if (refreshToken) {
                const {expired} = verifyJwt(refreshToken);
                if (expired) {
                    return wrapSend(res, unauthorized({bizLogicMessage: res.__('REFRESH_TOKEN_EXPIRED')}));
                }

                const newAccessToken = await reIssueAccessToken({refreshToken});
                if (newAccessToken) {
                    res.setHeader('x-access-token', newAccessToken);
                    const result = verifyJwt(newAccessToken as string);

                    res.locals.user = result.decoded;
                    return next();
                } else {
                    return wrapSend(res, unauthorized({bizLogicMessage: res.__('REISSUE_ACCESS_TOKEN_FAILED')}));

                }


            } else {
                return wrapSend(res, unauthorized({bizLogicMessage: res.__('REFRESH_TOKEN_NOT_PROVIDED')}));

            }
        } else {
            return wrapSend(res, unauthorized({bizLogicMessage: res.__('REFRESH_TOKEN_MALFORMED')}));

        }
    } else {
        return wrapSend(res, unauthorized({bizLogicMessage: res.__('ACCESS_TOKEN_NOT_PROVIDED')}));

    }


};

export default jwtAuth;
