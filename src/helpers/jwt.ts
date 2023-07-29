import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

export function signJwt(object: object, options?: jwt.SignOptions) {
    const secretKey = fs.readFileSync(__dirname + '/../../certs/bunny-rest-private.key');

    return jwt.sign(object, secretKey, {
        ...options,
        algorithm: 'RS256',
    });
}

export function verifyJwt(token: string) {
    const verifyKey = fs.readFileSync(__dirname + '/../../certs/bunny-rest-public.pem');

    try {
        const decoded = jwt.verify(token, verifyKey);
        return {
            valid: true,
            expired: false,
            decoded,
        };
    } catch (e: any) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null,
        };
    }
}
