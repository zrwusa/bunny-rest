'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
exports.deleteProduct = exports.findAndUpdateProduct = exports.findProduct = exports.createProduct = void 0;
const product_model_1 = __importDefault(require('../models/product-model'));
const metrics_1 = require('../utils/metrics');

function createProduct(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'createProduct',
        };
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const result = yield product_model_1.default.create(input);
            timer(Object.assign(Object.assign({}, metricsLabels), {success: 'true'}));
            return result;
        } catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), {success: 'false'}));
            throw e;
        }
    });
}

exports.createProduct = createProduct;

function findProduct(query, options = {lean: true}) {
    return __awaiter(this, void 0, void 0, function* () {
        const metricsLabels = {
            operation: 'findProduct',
        };
        const timer = metrics_1.databaseResponseTimeHistogram.startTimer();
        try {
            const result = yield product_model_1.default.findOne(query, {}, options);
            timer(Object.assign(Object.assign({}, metricsLabels), {success: 'true'}));
            return result;
        } catch (e) {
            timer(Object.assign(Object.assign({}, metricsLabels), {success: 'false'}));
            throw e;
        }
    });
}

exports.findProduct = findProduct;

function findAndUpdateProduct(query, update, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return product_model_1.default.findOneAndUpdate(query, update, options);
    });
}

exports.findAndUpdateProduct = findAndUpdateProduct;

function deleteProduct(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return product_model_1.default.deleteOne(query);
    });
}

exports.deleteProduct = deleteProduct;
