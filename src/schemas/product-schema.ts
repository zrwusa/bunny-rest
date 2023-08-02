import {number, object, string, TypeOf} from 'zod';
import {commonOpenApiResponseContent, makeOpenApiContent, openApiRegistry, security} from '../helpers';
import {xRefreshTokenSchema} from './auth-schema';
import {BLProduct} from '../constants';
import {E_ProtocolSchemaType} from '../types';

const body = object({
    title: string({required_error: 'Title is required',}),
    description: string({required_error: 'Description is required',})
        .min(120, 'Description should be at least 120 characters long'),
    price: number({required_error: 'Price is required',}),
    image: string({required_error: 'Image is required',}),
});

const params = object({
    id: string({required_error: 'id is required',})
        .openapi({
            param: {
                name: 'id',
                in: 'path',
                description: 'The id of the product',
                required: true,
            },
            example: 'd8803348-8521-42d4-b9a6-40c88902a800',
        }),
});

const getListQuery = object({
    skip: string({required_error: 'skip is required',})
        .openapi({
            param: {
                name: 'skip',
                in: 'query',
                description: 'The skip number of the product list',
                required: true,
            },
            example: '10',
        }),
    take: string({required_error: 'take is required',})
        .openapi({
            param: {
                name: 'take',
                in: 'query',
                description: 'The total number of the product list',
                required: true,
            },
            example: '10',
        }),
});

export const createProductSchema = object({body,});
export const getProductSchema = object({params});
export const getProductListSchema = object({query: getListQuery});
export const updateProductSchema = object({params, body,});
export const deleteProductSchema = object({params});

export type CreateProductBody = TypeOf<typeof body>;
export type GetProductParams = TypeOf<typeof params>;
export type GetProductListQuery = TypeOf<typeof getListQuery>;
export type UpdateProductParams = TypeOf<typeof params>;
export type UpdateProductReq = TypeOf<typeof body>;
export type DeleteProductParams = TypeOf<typeof params>;

/* For OpenApi to generating generated.yaml/generated.json */
openApiRegistry.registerPath({
    method: 'get',
    path: '/api/v1/products/{id}',
    description: 'Get a single product by the id',
    summary: 'Get a single product',
    tags: ['Product'],
    security,
    request: {params: params.extend(xRefreshTokenSchema),},
    responses: {
        ...commonOpenApiResponseContent,
        200: makeOpenApiContent('SuccessProtocol', {
            httpStatus: '200',
            bizLogicCodeAndTrans: BLProduct.GET_PRODUCT_SUCCESS,
            protocolSchemaType: E_ProtocolSchemaType.DEFAULT,
            resDataExample: {
                'id': 'dc36b869-8c59-4036-8ec9-14eb389928c6',
                'create_at': '2023-08-01T06:18:23.531Z',
                'update_at': '2023-08-01T06:18:41.421Z',
                'title': 'Canon EOS 1500D DSLR Camera with 18-55mm Lens',
                'description': 'Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.',
                'price': '6068.98',
                'image': 'https://i.imgur.com/QlRphfQ.jpg'
            }
        }),
    },
});