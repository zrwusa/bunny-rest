import {object, string, TypeOf} from 'zod';

const body = object({
    content: string({
        required_error: 'DemoThunk content field is required',
    })
});

const params = object({
    id: string({
        required_error: 'DemoThunk id field is required',
    }),
});

const query = object({
    from: string({
        required_error: 'DemoThunk from field is required',
    }),
    offset: string({
        required_error: 'DemoThunk offset field is required',
    })
});

export const createDemoThunkSchema = object({
    body,
});

export const updateDemoThunkSchema = object({
    body,
    params
});

export const deleteDemoThunkSchema = object({
    params
});

export const getDemoThunkSchema = object({
    params
});

export const getDemoThunksSchema = object({
    query
});

export type CreateDemoThunkBody = TypeOf<typeof body>;

export type UpdateDemoThunkBody = TypeOf<typeof body>;

export type UpdateDemoThunkParams = TypeOf<typeof params>;

export type GetDemoThunkParams = TypeOf<typeof params>;

export type GetDemoThunksParams = TypeOf<typeof query>;

export type DeleteDemoThunkParams = TypeOf<typeof params>;
