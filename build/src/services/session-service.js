"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reIssueAccessToken = exports.deleteSession = exports.findSessions = exports.createSession = void 0;
const lodash_1 = __importDefault(require("lodash"));
const config_1 = __importDefault(require("config"));
const jwt_1 = require("../helpers/jwt");
const user_service_1 = require("./user-service");
const redis_client_1 = __importDefault(require("../helpers/redis-client"));
const crypto_1 = require("crypto");
function createSession(userId, userAgent) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = { id: (0, crypto_1.randomUUID)(), user_id: userId, user_agent: userAgent };
        const setStatus = yield redis_client_1.default.set(userId.toString(), JSON.stringify(session));
        // todo logic needs to be optimized
        if (setStatus === 'OK') {
            return session;
        }
        else {
            return session;
        }
    });
}
exports.createSession = createSession;
function findSessions(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user_id } = query;
        if (!user_id)
            return;
        const sessionStr = yield redis_client_1.default.get(user_id);
        if (sessionStr) {
            return JSON.parse(sessionStr);
        }
        else {
            return;
        }
    });
}
exports.findSessions = findSessions;
function deleteSession(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = query;
        return yield redis_client_1.default.del(id);
    });
}
exports.deleteSession = deleteSession;
function reIssueAccessToken({ refreshToken }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { decoded } = (0, jwt_1.verifyJwt)(refreshToken);
        const userId = lodash_1.default.get(decoded, 'id');
        if (!decoded || !userId)
            return false;
        const sessionStr = yield redis_client_1.default.get(userId);
        let session = null;
        if (sessionStr) {
            session = JSON.parse(sessionStr);
        }
        else {
            return;
        }
        if (!session || !session.valid)
            return false;
        const user = yield (0, user_service_1.findUser)({ id: session.user_id });
        if (!user)
            return false;
        return (0, jwt_1.signJwt)(Object.assign(Object.assign({}, user), { session: session.id }), { expiresIn: config_1.default.get('ACCESS_TOKEN_TTL') });
    });
}
exports.reIssueAccessToken = reIssueAccessToken;
