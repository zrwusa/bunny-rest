import {object, string, TypeOf} from 'zod';

const query = object({
    minPrice: string({
        required_error: 'Min price id is required',
    }),
    maxPrice: string({
        required_error: 'Max price id is required',
    }),
});

export const getOrdersProductsAssocSchema = object({
    query
});

export type GetOrdersProductsAssocQuery = TypeOf<typeof query>;
