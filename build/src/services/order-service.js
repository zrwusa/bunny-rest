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
exports.createOrder = void 0;
const metrics_1 = require("../helpers/metrics");
const order_entity_1 = require("../entities/order-entity");
const postgres_data_source_1 = require("../helpers/postgres-data-source");
function createOrder(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'createOrder',
        };
        const orderRepo = postgres_data_source_1.PgDS.getRepository(order_entity_1.Order);
        const order = orderRepo.create(input);
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const result = yield orderRepo.save(order);
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'true' }));
            return result;
        }
        catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'false' }));
            throw e;
        }
    });
}
exports.createOrder = createOrder;
