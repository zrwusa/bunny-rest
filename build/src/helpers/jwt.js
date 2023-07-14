"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
function signJwt(object, options) {
    const secretKey = fs_1.default.readFileSync(__dirname + '/../../certs/bunny-private.key');
    return jsonwebtoken_1.default.sign(object, secretKey, Object.assign(Object.assign({}, options), { algorithm: 'RS256' }));
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    const verifyKey = fs_1.default.readFileSync(__dirname + '/../../certs/bunny-public.pem');
    try {
        const decoded = jsonwebtoken_1.default.verify(token, verifyKey);
        return {
            valid: true,
            expired: false,
            decoded,
        };
    }
    catch (e) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null,
        };
    }
}
exports.verifyJwt = verifyJwt;
