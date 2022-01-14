import {number, object, string, TypeOf} from 'zod';

const body = object({
    price: number({
        required_error: 'Price is required',
    }),
    address: string(),
    amount: number({
        required_error: 'Amount is required',
    })
});

const params = object({
    id: string({
        required_error: 'Order id is required',
    }),
});

export const createOrderSchema = object({
    body,
});

export const getOrdersSchema = object({
    query: object({
        minPrice: string({
            required_error: 'Min price id is required',
        }),
        maxPrice: string({
            required_error: 'Max price id is required',
        }),
    })
});


export type CreateOrderBody = TypeOf<typeof body>;

export type DeleteOrderParam = TypeOf<typeof params>;
