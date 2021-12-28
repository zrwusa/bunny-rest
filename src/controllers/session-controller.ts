import {NextFunction, Request, Response} from 'express';
import config from 'config';
import {createSession, deleteSession, findSessions,} from '../services/session-service';
import {validatePassword} from '../services/user-service';
import {signJwt} from '../utils/jwt';
import {wrapSend} from '../helpers/protocol';
import {ok, unauthorized, unprocessableEntity} from '../utils/rest-maker';

export async function createUserSessionHandler(req: Request, res: Response, next: NextFunction) {
    // Validate the user's password
    const user = await validatePassword(req.body);

    if (!user) {
        wrapSend(res, unauthorized({bizLogicMessage: res.__('INCORRECT_EMAIL_OR_PASSWORD')}));
    } else {
        // create a session
        const session = await createSession(user._id, req.get('user-agent') || '');

        try {
            // create an access token
            const accessToken = signJwt(
                {...user, session: session._id},
                {expiresIn: config.get('ACCESS_TOKEN_TTL')}
            );

            // create a refresh token
            const refreshToken = signJwt(
                {...user, session: session._id},
                {expiresIn: config.get('REFRESH_TOKEN_TTL')}
            );

            // return access & refresh tokens through header
            res.setHeader('x-access-token', accessToken);
            res.setHeader('x-refresh-token', refreshToken);
            return wrapSend(res, ok(), res.__('LOGIN_SUCCESS'));
        } catch (e: any) {
            next(e);
        }
    }
}

export async function getUserSessionsHandler(req: Request, res: Response, next: NextFunction) {
    const userId = res.locals.user._id;

    try {
        const sessions = await findSessions({user: userId, valid: true});
        wrapSend(res, ok(), sessions);
    } catch (e) {
        next(e);
    }
}

export async function deleteSessionHandler(req: Request, res: Response, next: NextFunction) {
    const sessionId = res.locals.user.session;
    try {
        // await updateSession({_id: sessionId}, {valid: false});
        const {deletedCount} = await deleteSession({_id: sessionId});
        if (deletedCount > 0) {
            res.setHeader('x-access-token', '');
            res.setHeader('x-refresh-token', '');
            wrapSend(res, ok(), res.__('LOGOUT_SUCCESS'));
        } else {
            wrapSend(res, unprocessableEntity({bizLogicMessage: res.__('LOGOUT_FAILED')}));
        }
    } catch (e) {
        next(e);
    }
}
