import {get} from 'lodash';
import config from 'config';
import {FilterQuery, UpdateQuery} from 'mongoose';
import SessionModel, {SessionDocument} from '../models/session-model';
import {signJwt, verifyJwt} from '../utils/jwt';
import {findUser} from './user-service';
import redisClient from '../utils/redis-client';

export async function createSession(userId: string, userAgent: string) {
    // const session = await SessionModel.create({user: userId, userAgent});
    //return session.toJSON();

    const session = {_id: userId.toString(), user: userId, userAgent};
    // console.log('---userId', userId.toString(), JSON.stringify(session));
    const setStatus = await redisClient.set(userId.toString(), JSON.stringify(session));
    // todo
    // await redisClient.expire(userId, REFRESH_TOKEN_EXPIRES_IN_BY_SECONDS);
    // console.log('---sessionStr', typeof sessionStr);

    // todo logic needs to be optimized
    if (setStatus === 'OK') {
        return session;
    } else {
        return session;
    }
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
    // return SessionModel.find(query).lean();
    const {user} = query;
    // console.log('---user', user);
    const sessionStr = await redisClient.get(user);
    // console.log('---sessionStr', sessionStr)
    if (sessionStr) {
        return JSON.parse(sessionStr);
    } else {
        return;
    }
}

export async function updateSession(
    query: FilterQuery<SessionDocument>,
    update: UpdateQuery<SessionDocument>
) {
    return SessionModel.updateOne(query, update);
}

export async function deleteSession(query: FilterQuery<SessionDocument>) {
    // return SessionModel.deleteOne(query);
    const {_id} = query;
    // console.log('---_id', _id);
    const deletedSession = await redisClient.del(_id);
    // console.log('---deletedSession', deletedSession);
    return deletedSession;
}

// todo Redis
export async function reIssueAccessToken({refreshToken}: { refreshToken: string; }) {
    const {decoded} = verifyJwt(refreshToken);

    if (!decoded || !get(decoded, 'session')) return false;

    const session = await SessionModel.findById(get(decoded, 'session'));

    if (!session || !session.valid) return false;

    const user = await findUser({_id: session.user});

    if (!user) return false;

    return signJwt(
        {...user, session: session._id},
        {expiresIn: config.get('ACCESS_TOKEN_TTL')}
    );
}
