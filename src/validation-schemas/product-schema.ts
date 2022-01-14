import {number, object, string} from 'zod';

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

const productBody = object({
    title: string({
        required_error: 'Title is required',
    }),
    description: string({
        required_error: 'Description is required',
    }).min(120, 'Description should be at least 120 characters long'),
    price: number({
        required_error: 'Price is required',
    }),
    image: string({
        required_error: 'Image is required',
    }),
});

const productParams = object({
    productId: string({
        required_error: 'productId is required',
    }),
});

export const createProductSchema = object({
    body: productBody,
});

export const updateProductSchema = object({
    body: productBody,
    params: productParams
});

export const deleteProductSchema = object({
    params: productParams
});

export const getProductSchema = object({
    params: productParams
});
