"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderProductsSchema = void 0;
const zod_1 = require("zod");
const body = (0, zod_1.array)((0, zod_1.string)({
    required_error: 'Product ids are required',
})).min(1);
const params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: 'Order id is required',
    }),
});
exports.createOrderProductsSchema = (0, zod_1.object)({
    params,
    body,
});
