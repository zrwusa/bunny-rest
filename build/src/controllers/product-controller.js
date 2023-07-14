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
exports.deleteProductCtrl = exports.getProductCtrl = exports.updateProductCtrl = exports.createProductCtrl = void 0;
const product_service_1 = require("../services/product-service");
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const protocol_1 = require("../helpers/protocol");
function createProductCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        try {
            const product = yield (0, product_service_1.createProduct)(body);
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), product);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.createProductCtrl = createProductCtrl;
function updateProductCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { body } = req;
        try {
            const product = yield (0, product_service_1.findProduct)({ id });
            if (!product) {
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res));
            }
            const updatedProduct = yield (0, product_service_1.findAndUpdateProduct)({ id }, body);
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), updatedProduct);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.updateProductCtrl = updateProductCtrl;
function getProductCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield (0, product_service_1.findProduct)({ id });
            if (!product) {
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res));
            }
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), product);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getProductCtrl = getProductCtrl;
function deleteProductCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield (0, product_service_1.findProduct)({ id });
            if (!product) {
                return (0, protocol_1.wrapSend)(res, rest_maker_1.default.notFound(res));
            }
            const deletedProduct = yield (0, product_service_1.deleteProduct)({ id });
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), deletedProduct);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.deleteProductCtrl = deleteProductCtrl;
