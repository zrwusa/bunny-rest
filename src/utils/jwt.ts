import jwt from 'jsonwebtoken';
import config from 'config';
import logger from './logger';

export function signJwt(
    object: Object,
    keyName: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey',
    options?: jwt.SignOptions
) {
    const signingKey = Buffer.from(
        config.get<string>(keyName),
        'base64'
    ).toString('ascii');

    return jwt.sign(object, signingKey, {
        ...options,
        algorithm: 'RS256',
    });
}

export function verifyJwt(
    token: string,
    keyName: 'accessTokenPublicKey' | 'refreshTokenPublicKey'
) {
    const publicKey = Buffer.from(config.get<string>(keyName), 'base64').toString(
        'ascii'
    );

    try {
        const decoded = jwt.verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decoded,
        };
    } catch (e: any) {
        logger.error(e);
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null,
        };
    }
}
