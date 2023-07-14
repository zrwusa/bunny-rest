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
exports.getOrdersProductsCtrl = void 0;
const rest_maker_1 = __importDefault(require("../helpers/rest-maker"));
const protocol_1 = require("../helpers/protocol");
const orders_pruducts_service_1 = require("../services/orders-pruducts-service");
// todo can we use Zob schema as the Request type?
function getOrdersProductsCtrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { minPrice, maxPrice } = req.query;
        try {
            const orders = yield (0, orders_pruducts_service_1.findOrdersProducts)({ minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice) });
            return (0, protocol_1.wrapSend)(res, rest_maker_1.default.ok(res), orders);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getOrdersProductsCtrl = getOrdersProductsCtrl;
