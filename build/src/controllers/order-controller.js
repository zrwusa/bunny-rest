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
exports.deleteOrdersCtrl = exports.getOrdersCtrl = exports.createOrderCtrl = void 0;
const order_service_1 = require("../services/order-service");
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const protocol_1 = require("../helpers/protocol");
const order_entity_1 = require("../entities/order-entity");
const postgres_data_source_1 = require("../helpers/postgres-data-source");
const biz_logics_1 = require("../helpers/biz-logics");
function createOrderCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        try {
            const order = yield (0, order_service_1.createOrder)(body);
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res, biz_logics_1.BL.CREATE_ORDER_SUCCESS), order);
        }
        catch (e) {
            // todo need to specify error type, i.e. validation error type
            next(e);
        }
    });
}
exports.createOrderCtrl = createOrderCtrl;
function getOrdersCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderRepo = postgres_data_source_1.PgDS.getRepository(order_entity_1.Order);
        try {
            const orders = yield orderRepo.find();
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), orders);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getOrdersCtrl = getOrdersCtrl;
function deleteOrdersCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderRepo = postgres_data_source_1.PgDS.getRepository(order_entity_1.Order);
        const { id } = req.params;
        try {
            const orders = yield orderRepo.delete(id);
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), orders);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.deleteOrdersCtrl = deleteOrdersCtrl;
