import {object, string, TypeOf} from 'zod';

const query = object({
    from: string({
        required_error: 'From is required',
    }),
    offset: string({
        required_error: 'Offset is required',
    }),
});

export const getPostsSchema = object({
    query
});

export type GetPostsQuery = TypeOf<typeof query>;
