import type {PureEntity} from '../types';
import _ from 'lodash';
import config from 'config';
import {redisClient, serviceProfile, signJwt, verifyJwt} from '../helpers';
import {findUser} from './user-service';
import {SessionEntity, UserEntity} from '../entities';
import {randomUUID} from 'crypto';

export async function createSession(userId: string, userAgent: string) {
    return await serviceProfile('createSession', async () => {
        const session: PureEntity<SessionEntity> | null = {
            id: randomUUID(),
            user_id: userId,
            user_agent: userAgent,
            valid: true
        };
        const setStatus = await redisClient.set(userId.toString(), JSON.stringify(session));

        // todo logic needs to be optimized
        return setStatus === 'OK' ? session : null;
    });
}

export async function findSession(query: Partial<SessionEntity>) {
    const {user_id} = query;
    if (!user_id) return null;
    return await serviceProfile('findSession', async () => {
        const sessionStr = await redisClient.get(user_id);
        return sessionStr ? JSON.parse(sessionStr) as PureEntity<SessionEntity> : null;
    });
}

export async function deleteSession(query: Pick<UserEntity, 'id'>) {
    const {id} = query;
    return await serviceProfile('deleteSession', async () => await redisClient.del(id));
}

export async function reIssueAccessToken(refreshToken: string) {
    return await serviceProfile('reIssueAccessToken', async () => {
        const {decoded} = verifyJwt(refreshToken);
        const userId = _.get(decoded, 'id');
        if (!decoded || !userId) return false;

        const sessionStr = await redisClient.get(userId);
        let session: SessionEntity | null = null;

        if (sessionStr) {
            session = JSON.parse(sessionStr) as SessionEntity;
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
    });
}
