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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOrdersProducts = void 0;
const order_entity_1 = require("../entities/order-entity");
const metrics_1 = require("../helpers/metrics");
const postgres_data_source_1 = require("../helpers/postgres-data-source");
function findOrdersProducts(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'findOrdersProducts',
        };
        const { minPrice, maxPrice } = query;
        const orderRepo = postgres_data_source_1.PgDS.getRepository(order_entity_1.Order);
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const orders = orderRepo.createQueryBuilder()
                .select('order')
                .from(order_entity_1.Order, 'order')
                .leftJoinAndSelect('order.products', 'products')
                .where('order.price >= :minPrice AND order.price <= :maxPrice', { minPrice, maxPrice })
                .getMany();
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'true' }));
            return orders;
        }
        catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'false' }));
            throw e;
        }
    });
}
exports.findOrdersProducts = findOrdersProducts;
