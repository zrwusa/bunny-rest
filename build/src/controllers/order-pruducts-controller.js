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
exports.createOrderProductsCtrl = void 0;
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const protocol_1 = require("../helpers/protocol");
const order_entity_1 = require("../entities/order-entity");
const product_entity_1 = require("../entities/product-entity");
const typeorm_1 = require("typeorm");
const postgres_data_source_1 = require("../helpers/postgres-data-source");
const biz_logics_1 = require("../helpers/biz-logics");
function createOrderProductsCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { body } = req;
        const orderRepo = postgres_data_source_1.PgDS.getRepository(order_entity_1.Order);
        const order = yield orderRepo.findOneBy({ id: id });
        if (!order) {
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res, biz_logics_1.BL.ORDER_NOT_EXIST));
        }
        else {
            const productsRepo = postgres_data_source_1.PgDS.getRepository(product_entity_1.Product);
            const products = yield productsRepo.find({ where: { id: (0, typeorm_1.In)(body) } });
            try {
                order.products = products;
                const savedOrder = yield orderRepo.save(order);
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), savedOrder);
            }
            catch (e) {
                next(e);
            }
        }
    });
}
exports.createOrderProductsCtrl = createOrderProductsCtrl;
