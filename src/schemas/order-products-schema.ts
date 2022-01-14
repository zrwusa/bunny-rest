import {array, object, string, TypeOf} from 'zod';

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

export type CreateOrderProductsParams = TypeOf<typeof params>;

export type CreateOrderProductsBody = TypeOf<typeof body>;
