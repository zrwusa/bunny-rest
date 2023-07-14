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
exports.deleteProduct = exports.findAndUpdateProduct = exports.findProduct = exports.createProduct = void 0;
const metrics_1 = require("../helpers/metrics");
const product_entity_1 = require("../entities/product-entity");
const postgres_data_source_1 = require("../helpers/postgres-data-source");
function createProduct(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'createProduct',
        };
        const productRepo = postgres_data_source_1.PgDS.getRepository(product_entity_1.Product);
        const product = productRepo.create(input);
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const result = yield productRepo.save(product);
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'true' }));
            return result;
        }
        catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'false' }));
            throw e;
        }
    });
}
exports.createProduct = createProduct;
function findProduct(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'findProduct',
        };
        const productRepo = postgres_data_source_1.PgDS.getRepository(product_entity_1.Product);
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const result = yield productRepo.findOneBy(query);
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'true' }));
            return result;
        }
        catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), { success: 'false' }));
            throw e;
        }
    });
}
exports.findProduct = findProduct;
function findAndUpdateProduct(query, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const productRepo = postgres_data_source_1.PgDS.getRepository(product_entity_1.Product);
        return productRepo.save(Object.assign({ id: query.id }, update));
    });
}
exports.findAndUpdateProduct = findAndUpdateProduct;
function deleteProduct(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const productRepo = postgres_data_source_1.PgDS.getRepository(product_entity_1.Product);
        return yield productRepo.delete(query);
    });
}
exports.deleteProduct = deleteProduct;
