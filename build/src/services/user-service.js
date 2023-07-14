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
exports.validatePassword = exports.deleteUser = exports.findUser = exports.createUser = void 0;
const lodash_1 = require("lodash");
const user_entity_1 = require("../entities/user-entity");
const bcrypt_1 = __importDefault(require("bcrypt"));
const postgres_data_source_1 = require("../helpers/postgres-data-source");
function createUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepo = postgres_data_source_1.PgDS.getRepository(user_entity_1.User);
        const user = yield userRepo.save(userRepo.create(input));
        return (0, lodash_1.omit)(user, 'password');
    });
}
exports.createUser = createUser;
function findUser(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepo = postgres_data_source_1.PgDS.getRepository(user_entity_1.User);
        return userRepo.findOneBy(query);
    });
}
exports.findUser = findUser;
function deleteUser(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepo = postgres_data_source_1.PgDS.getRepository(user_entity_1.User);
        return yield userRepo.delete(query);
    });
}
exports.deleteUser = deleteUser;
function validatePassword({ email, password }) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepo = postgres_data_source_1.PgDS.getRepository(user_entity_1.User);
        const user = yield userRepo.findOneBy({ email });
        if (!user)
            return;
        if (typeof password !== 'string')
            return;
        const isValid = bcrypt_1.default.compare(password, user.password).catch(e => false);
        if (!isValid)
            return;
        return (0, lodash_1.omit)(user, 'password');
    });
}
exports.validatePassword = validatePassword;
