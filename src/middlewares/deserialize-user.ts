import {get} from 'lodash';
import {NextFunction, Request, Response} from 'express';
import {verifyJwt} from '../utils/jwt';
import {reIssueAccessToken} from '../services/session-service';
import {UnauthorizedError} from '../utils/errors';

// TODO There is some issues with the judgment logic and process
const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');

    const refreshToken = get(req, 'headers.x-refresh');

    if (!accessToken) {
        const err = new UnauthorizedError();
        res.status(parseInt(err.code)).send({
            type: err.constructor.name,
            code: err.code,
            message: err.message,
            stack: err.stack
        });
        return;
    }

    const {decoded, expired} = verifyJwt(accessToken);

    if (decoded) {
        res.locals.user = decoded;
        return next();
    }

    if (expired && refreshToken) {
        const newAccessToken = await reIssueAccessToken({refreshToken});

        if (newAccessToken) {
            res.setHeader('x-access-token', newAccessToken);
        }

        const result = verifyJwt(newAccessToken as string);

        res.locals.user = result.decoded;
        return next();
    }

    return next();
};

export default deserializeUser;
