import {number, object, string, TypeOf} from 'zod';

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
const body = object({
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

const params = object({
    id: string({
        required_error: 'product id is required',
    }),
});

export const createProductSchema = object({
    body,
});

export const updateProductSchema = object({
    body,
    params
});

export const deleteProductSchema = object({
    params
});

export const getProductSchema = object({
    params
});

export type CreateProductBody = TypeOf<typeof body>;

export type UpdateProductBody = TypeOf<typeof body>;

export type UpdateProductParams = TypeOf<typeof params>;

export type GetProductParams = TypeOf<typeof params>;

export type DeleteProductParams = TypeOf<typeof params>;
