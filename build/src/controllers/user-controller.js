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
exports.deleteUserCtrl = exports.createUserCtrl = void 0;
const user_service_1 = require("../services/user-service");
const protocol_1 = require("../helpers/protocol");
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
function createUserCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        try {
            const user = yield (0, user_service_1.createUser)(body);
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), user);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.createUserCtrl = createUserCtrl;
function deleteUserCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield (0, user_service_1.findUser)({ id });
            if (!user) {
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res));
            }
            const deletedUser = yield (0, user_service_1.deleteUser)({ id });
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), deletedUser);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.deleteUserCtrl = deleteUserCtrl;
