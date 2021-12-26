import jwt from 'jsonwebtoken';
import logger from './logger';
import fs from 'fs';

export function signJwt(object: Object, keyName: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey', options?: jwt.SignOptions) {
    const signingKey = fs.readFileSync(__dirname + '/../../certs/bunny-private.key');

    // const signingKey = Buffer.from(config.get<string>(keyName), 'base64').toString('ascii');

    return jwt.sign(object, signingKey, {
        ...options,
        algorithm: 'RS256',
    });
}

export function verifyJwt(token: string, keyName: 'accessTokenPublicKey' | 'refreshTokenPublicKey') {
    // const publicKey = Buffer.from(config.get<string>(keyName), 'base64').toString('ascii');
    const verifyKey = fs.readFileSync(__dirname + '/../../certs/bunny-public.pem');

    try {
        const decoded = jwt.verify(token, verifyKey);
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
