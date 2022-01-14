import {array, object, string} from 'zod';

const body = array(string({
    required_error: 'Product ids are required',
})).min(1);

const params = object({
    id: string({
        required_error: 'Order id is required',
    }),
});

export const createOrderProductsSchema = object({
    params,
    body,
});

export const getOrdersProductsSchema = object({
    query: object({
        minPrice: string({
            required_error: 'Min price id is required',
        }),
        maxPrice: string({
            required_error: 'Max price id is required',
        }),
    })
});
