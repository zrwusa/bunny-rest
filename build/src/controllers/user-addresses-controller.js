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
exports.createUserAddressesCtrl = void 0;
const user_entity_1 = require("../entities/user-entity");
const protocol_1 = require("../helpers/protocol");
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const address_entity_1 = require("../entities/address-entity");
const postgres_data_source_1 = require("../helpers/postgres-data-source");
const biz_logics_1 = require("../helpers/biz-logics");
function createUserAddressesCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { body } = req;
        const userRepo = postgres_data_source_1.PgDS.getRepository(user_entity_1.User);
        const user = yield userRepo.findOneBy({ id: id });
        if (!user) {
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res, biz_logics_1.BL.NULL_USER));
        }
        else {
            const addressRepo = postgres_data_source_1.PgDS.getRepository(address_entity_1.Address);
            try {
                const address = yield addressRepo.save(addressRepo.create(Object.assign(Object.assign({}, body), { user })));
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), address);
            }
            catch (e) {
                next(e);
            }
        }
    });
}
exports.createUserAddressesCtrl = createUserAddressesCtrl;
