import {number, object, string, TypeOf} from 'zod';
import {openApiBearerAuth, openApiRegistry} from '../helpers/zod-openapi';
import {xRefreshTokenSchema} from './auth-schema';


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
        required_error: 'id is required',
    }).openapi({
        param: {
            name: 'id',
            in: 'path',
            description: 'The id of the product',
            required: true,
        },
        example: 'd8803348-8521-42d4-b9a6-40c88902a800',
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

// For OpenAPI .yaml generating
openApiRegistry.registerPath({
    method: 'get',
    path: '/api/v1/products/{id}',
    description: 'Get a single product by the id',
    summary: 'Get a single product',
    tags: ['Product'],
    security: [{[openApiBearerAuth.name]: []}],
    request: {
        params: params.extend(xRefreshTokenSchema),
    },
    responses: {
        200: {
            description: 'Success',
            content: {
                // 'application/json': {
                    // schema: xxx, // Replace 'xxx' with the appropriate schema definition for the Product model
                // },
            },
        },
        404: {
            description: 'Product not found',
        },
    },
});

export type CreateProductBody = TypeOf<typeof body>;

export type UpdateProductBody = TypeOf<typeof body>;

export type UpdateProductParams = TypeOf<typeof params>;

export type GetProductParams = TypeOf<typeof params>;

export type DeleteProductParams = TypeOf<typeof params>;