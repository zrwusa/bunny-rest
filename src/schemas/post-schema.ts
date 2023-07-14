import {object, string, TypeOf} from 'zod';

/**
 * @openapi
 * components:
 *   schema:
 *     Post:
 *       type: object
 *       required:
 *        - content
 *       properties:
 *         title:
 *           type: string
 */
const body = object({
    content: string({
        required_error: 'Content is required',
    })
});

const params = object({
    id: string({
        required_error: 'Post id is required',
    }),
});

export const createPostSchema = object({
    body,
});

export const updatePostSchema = object({
    body,
    params
});

export const deletePostSchema = object({
    params
});

export const getPostSchema = object({
    params
});


export type CreatePostBody = TypeOf<typeof body>;

export type UpdatePostBody = TypeOf<typeof body>;

export type UpdatePostParams = TypeOf<typeof params>;

export type GetPostParams = TypeOf<typeof params>;

export type DeletePostParams = TypeOf<typeof params>;
