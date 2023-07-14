"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersProductsSchema = void 0;
const zod_1 = require("zod");
const query = (0, zod_1.object)({
    minPrice: (0, zod_1.string)({
        required_error: 'Min price id is required',
    }),
    maxPrice: (0, zod_1.string)({
        required_error: 'Max price id is required',
    }),
});
exports.getOrdersProductsSchema = (0, zod_1.object)({
    query
});
