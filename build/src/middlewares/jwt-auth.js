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
const lodash_1 = require("lodash");
const jwt_1 = require("../helpers/jwt");
const session_service_1 = require("../services/session-service");
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const protocol_1 = require("../helpers/protocol");
const biz_logics_1 = require("../helpers/biz-logics");
const jwtAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accessTokenRaw = (0, lodash_1.get)(req, 'headers.authorization', '');
    if (typeof accessTokenRaw !== 'string') {
        return (0, protocol_1.wrapSend)(res, rest_maker_1.default.unauthorized(res, biz_logics_1.BL.ACCESS_TOKEN_MALFORMED));
    }
    const accessToken = accessTokenRaw.replace(/^Bearer\s/, '');
    if (accessToken) {
        const { decoded, expired } = (0, jwt_1.verifyJwt)(accessToken);
        if (decoded) {
            res.locals.user = decoded;
            const userSession = yield (0, session_service_1.findSessions)({ user_id: res.locals.user.id });
            // We can implement more features here, e.g. blacklist
            if (!userSession) {
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.unauthorized(res, biz_logics_1.BL.SESSION_NOT_EXIST));
            }
            else {
                return next();
            }
        }
        else if (expired) {
            const refreshToken = (0, lodash_1.get)(req, 'headers.x-refresh');
            if (refreshToken && typeof refreshToken === 'string') {
                const { expired } = (0, jwt_1.verifyJwt)(refreshToken);
                if (expired) {
                    return (0, protocol_1.wrapSend)(res, rest_maker_1.default.unauthorized(res, biz_logics_1.BL.REFRESH_TOKEN_EXPIRED));
                }
                const newAccessToken = yield (0, session_service_1.reIssueAccessToken)({ refreshToken });
                if (newAccessToken && typeof newAccessToken === 'string') {
                    res.setHeader('x-access-token', newAccessToken);
                    const result = (0, jwt_1.verifyJwt)(newAccessToken);
                    res.locals.user = result.decoded;
                    return next();
                }
                else {
                    return (0, protocol_1.wrapSend)(res, rest_maker_1.default.unauthorized(res, biz_logics_1.BL.REISSUE_ACCESS_TOKEN_FAILED));
                }
            }
            else {
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.unauthorized(res, biz_logics_1.BL.REFRESH_TOKEN_NOT_PROVIDED));
            }
        }
        else {
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.unauthorized(res, biz_logics_1.BL.REFRESH_TOKEN_MALFORMED));
        }
    }
    else {
        return (0, protocol_1.wrapSend)(res, rest_maker_1.default.unauthorized(res, biz_logics_1.BL.ACCESS_TOKEN_NOT_PROVIDED));
    }
});
exports.default = jwtAuth;
