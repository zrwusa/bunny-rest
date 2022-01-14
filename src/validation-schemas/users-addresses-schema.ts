import {number, object, string} from 'zod';

const body = object({
    lineA: string({
        required_error: 'Line a is required',
    }),
    lineB: string({
        required_error: 'Line b is required',
    }),
    lineC: string({
        required_error: 'Line c is required',
    }),
    postCode: number({
        required_error: 'Post code is required',
    }),
    category: string({
        required_error: 'Category is required',
    })
});

const params = object({
    id: string({
        required_error: 'User id is required',
    }),
});

export const createUserAddressesSchema = object({
    params,
    body,
});
