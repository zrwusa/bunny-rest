import _ from 'lodash';
import config from 'config';
import {signJwt, verifyJwt} from '../helpers/jwt';
import {findUser} from './user-service';
import redisClient from '../helpers/redis-client';
import {Session} from '../entities/session-entity';
import {randomUUID} from 'crypto';
import {User} from '../entities/user-entity';

export async function createSession(userId: string, userAgent: string) {

    const session = {id: randomUUID(), user_id: userId, user_agent: userAgent};
    const setStatus = await redisClient.set(userId.toString(), JSON.stringify(session));

    // todo logic needs to be optimized
    if (setStatus === 'OK') {
        return session;
    } else {
        return session;
    }
}

export async function findSessions(query: Partial<Session>) {
    const {user_id} = query;
    if (!user_id) return;
    const sessionStr = await redisClient.get(user_id);
    if (sessionStr) {
        return JSON.parse(sessionStr);
    } else {
        return;
    }
}

export async function deleteSession(query: Pick<User, 'id'>) {
    const {id} = query;
    return await redisClient.del(id);
}

export async function reIssueAccessToken({refreshToken}: { refreshToken: string; }) {
    const {decoded} = verifyJwt(refreshToken);
    const userId = _.get(decoded, 'id');
    if (!decoded || !userId) return false;


    const sessionStr = await redisClient.get(userId);

    let session: Session | null = null;
    if (sessionStr) {
        session = JSON.parse(sessionStr) as Session;
    } else {
        return;
    }

    if (!session || !session.valid) return false;

    const user = await findUser({id: session.user_id});

    if (!user) return false;

    return signJwt(
        {...user, session: session.id},
        {expiresIn: config.get('ACCESS_TOKEN_TTL')}
    );
}
