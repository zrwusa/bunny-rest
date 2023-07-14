"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductSchema = exports.deleteProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
/**
 * @openapi
 * components:
 *   schema:
 *     Product:
 *       type: object
 *       required:
 *        - title
 *        - description
 *        - price
 *        - image
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         image:
 *           type: string
 */
const body = (0, zod_1.object)({
    title: (0, zod_1.string)({
        required_error: 'Title is required',
    }),
    description: (0, zod_1.string)({
        required_error: 'Description is required',
    }).min(120, 'Description should be at least 120 characters long'),
    price: (0, zod_1.number)({
        required_error: 'Price is required',
    }),
    image: (0, zod_1.string)({
        required_error: 'Image is required',
    }),
});
const params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: 'product id is required',
    }),
});
exports.createProductSchema = (0, zod_1.object)({
    body,
});
exports.updateProductSchema = (0, zod_1.object)({
    body,
    params
});
exports.deleteProductSchema = (0, zod_1.object)({
    params
});
exports.getProductSchema = (0, zod_1.object)({
    params
});
