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
exports.deleteSessionCtrl = exports.getUserSessionCtrl = exports.createUserSessionCtrl = void 0;
const config_1 = __importDefault(require("config"));
const session_service_1 = require("../services/session-service");
const user_service_1 = require("../services/user-service");
const jwt_1 = require("../helpers/jwt");
const protocol_1 = require("../helpers/protocol");
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const biz_logics_1 = require("../helpers/biz-logics");
function createUserSessionCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Validate the user's password
        const user = yield (0, user_service_1.validatePassword)(req.body);
        if (!user) {
            (0, protocol_1.wrapSend)(res, rest_maker_1.default.unauthorized(res, biz_logics_1.BL.INCORRECT_EMAIL_OR_PASSWORD));
        }
        else {
            try {
                // create an access token
                const accessToken = (0, jwt_1.signJwt)(Object.assign({}, user), { expiresIn: config_1.default.get('ACCESS_TOKEN_TTL') });
                // create a refresh token
                const refreshToken = (0, jwt_1.signJwt)(Object.assign({}, user), { expiresIn: config_1.default.get('REFRESH_TOKEN_TTL') });
                // create a session
                yield (0, session_service_1.createSession)(user.id, req.get('user-agent') || '');
                res.setHeader('x-access-token', accessToken);
                res.setHeader('x-refresh-token', refreshToken);
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), res.__('LOGIN_SUCCESS'));
            }
            catch (e) {
                next(e);
            }
        }
    });
}
exports.createUserSessionCtrl = createUserSessionCtrl;
function getUserSessionCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = res.locals.user.id;
        try {
            const userSession = yield (0, session_service_1.findSessions)({ user_id: userId });
            (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), userSession);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getUserSessionCtrl = getUserSessionCtrl;
function deleteSessionCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = res.locals.user.id;
        try {
            const deletedCount = yield (0, session_service_1.deleteSession)({ id: userId });
            if (deletedCount > 0) {
                res.setHeader('x-access-token', '');
                res.setHeader('x-refresh-token', '');
                (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), res.__('LOGOUT_SUCCESS'));
            }
            else {
                (0, protocol_1.wrapSend)(res, rest_maker_1.default.unprocessableEntity(res, biz_logics_1.BL.LOGOUT_FAILED));
            }
        }
        catch (e) {
            next(e);
        }
    });
}
exports.deleteSessionCtrl = deleteSessionCtrl;
