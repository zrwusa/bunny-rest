"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersSchema = exports.createOrderSchema = void 0;
const zod_1 = require("zod");
const body = (0, zod_1.object)({
    price: (0, zod_1.number)({
        required_error: 'Price is required',
    }),
    address: (0, zod_1.string)(),
    amount: (0, zod_1.number)({
        required_error: 'Amount is required',
    })
});
const params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: 'Order id is required',
    }),
});
exports.createOrderSchema = (0, zod_1.object)({
    body,
});
exports.getOrdersSchema = (0, zod_1.object)({
    query: (0, zod_1.object)({
        minPrice: (0, zod_1.string)({
            required_error: 'Min price id is required',
        }),
        maxPrice: (0, zod_1.string)({
            required_error: 'Max price id is required',
        }),
    })
});
