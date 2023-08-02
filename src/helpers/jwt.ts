import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

const appRoot = process.cwd();

export function signJwt(object: object, options?: jwt.SignOptions) {
    const secretKey = fs.readFileSync(appRoot + '/certs/bunny-rest-private.key');

    return jwt.sign(object, secretKey, {
        ...options,
        algorithm: 'RS256',
    });
}

export function verifyJwt(token: string) {
    const verifyKey = fs.readFileSync(appRoot + '/certs/bunny-rest-public.pem');

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
