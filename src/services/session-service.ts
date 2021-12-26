import {get} from 'lodash';
import config from 'config';
import {FilterQuery, UpdateQuery} from 'mongoose';
import SessionModel, {SessionDocument} from '../models/session-model';
import {signJwt, verifyJwt} from '../utils/jwt';
import {findUser} from './user-service';

export async function createSession(userId: string, userAgent: string) {
    const session = await SessionModel.create({user: userId, userAgent});

    return session.toJSON();
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
    return SessionModel.find(query).lean();
}

export async function updateSession(
    query: FilterQuery<SessionDocument>,
    update: UpdateQuery<SessionDocument>
) {
    return SessionModel.updateOne(query, update);
}

export async function reIssueAccessToken({refreshToken}: { refreshToken: string; }) {
    const {decoded} = verifyJwt(refreshToken);
    console.log('yyy', decoded);

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
