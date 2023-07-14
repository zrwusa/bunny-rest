import {NextFunction, Request, Response} from 'express';
import config from 'config';
import {createSession, deleteSession, findSessions,} from '../services/session-service';
import {validatePassword} from '../services/user-service';
import {signJwt} from '../helpers/jwt';
import {wrapSend} from '../helpers/protocol';
import RESTFul from '../helpers/rest-maker';

export async function createUserSessionCtrl(req: Request, res: Response, next: NextFunction) {
    // Validate the user's password
    const user = await validatePassword(req.body);

    if (!user) {
        wrapSend(res, RESTFul.unauthorized({bizLogicMessage: res.__('INCORRECT_EMAIL_OR_PASSWORD')}));
    } else {
        try {
            // create an access token
            const accessToken = signJwt(
                {...user},
                {expiresIn: config.get('ACCESS_TOKEN_TTL')}
            );

            // create a refresh token
            const refreshToken = signJwt(
                {...user},
                {expiresIn: config.get('REFRESH_TOKEN_TTL')}
            );

            // create a session
            await createSession(user.id, req.get('user-agent') || '');

            res.setHeader('x-access-token', accessToken);
            res.setHeader('x-refresh-token', refreshToken);
            return wrapSend(res, RESTFul.ok(), res.__('LOGIN_SUCCESS'));
        } catch (e: any) {
            next(e);
        }
    }
}

export async function getUserSessionCtrl(req: Request, res: Response, next: NextFunction) {
    const userId = res.locals.user.id;

    try {
        const userSession = await findSessions({user_id: userId});
        wrapSend(res, RESTFul.ok(), userSession);
    } catch (e) {
        next(e);
    }
}

export async function deleteSessionCtrl(req: Request, res: Response, next: NextFunction) {
    const userId = res.locals.user.id;
    try {
        const deletedCount = await deleteSession({id: userId});
        if (deletedCount > 0) {
            res.setHeader('x-access-token', '');
            res.setHeader('x-refresh-token', '');
            wrapSend(res, RESTFul.ok(), res.__('LOGOUT_SUCCESS'));
        } else {
            wrapSend(res, RESTFul.unprocessableEntity({bizLogicMessage: res.__('LOGOUT_FAILED')}));
        }
    } catch (e) {
        next(e);
    }
}
