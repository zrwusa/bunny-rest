import {NextFunction, Request, Response} from 'express';
import config from 'config';
import {createSession, findSessions, updateSession,} from '../services/session-service';
import {validatePassword} from '../services/user-service';
import {signJwt} from '../utils/jwt';
import {UnauthorizedError} from '../utils/errors';

export async function createUserSessionHandler(req: Request, res: Response, next: NextFunction) {
    // Validate the user's password
    const user = await validatePassword(req.body);

    if (!user) {
        next(new UnauthorizedError('Invalid email or password'));
    } else {
        // create a session
        const session = await createSession(user._id, req.get('user-agent') || '');

        try {
            // create an access token
            const accessToken = signJwt(
                {...user, session: session._id},
                'accessTokenPrivateKey',
                {expiresIn: config.get('accessTokenTtl')}
            );

            // create a refresh token
            const refreshToken = signJwt(
                {...user, session: session._id},
                'refreshTokenPrivateKey',
                {expiresIn: config.get('refreshTokenTtl')}
            );

            // return access & refresh tokens
            return res.send({accessToken, refreshToken});
        } catch (e: any) {
            next(e);
        }
    }
}

export async function getUserSessionsHandler(req: Request, res: Response) {
    const userId = res.locals.user._id;

    const sessions = await findSessions({user: userId, valid: true});

    return res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session;

    await updateSession({_id: sessionId}, {valid: false});

    return res.send({
        accessToken: null,
        refreshToken: null,
    });
}
