import {object, string, TypeOf} from 'zod';
import {openApiRegistry} from '../helpers/zod-openapi';

const body = object({
    content: string({
        required_error: 'Content is required',
    })
});
/** Validation middleware and OpenAPI need this, and we also may use TypeOf extract type for controller to use.
 In Validation middleware we must specify key as [params], in OpenAPI we must specify it as [in: path / in: query]
 **/
const getOrDelPostParams = object({
    id: string({
        required_error: 'Post id field is required',
    }).openapi({
        param: {
            name: 'id',
            in: 'path'
        },
        example: 'a313ad97-76f2-443f-be35-c37a0cbf3886'
    }),
});

export const createPostSchema = object({
    body,
});

export const updatePostSchema = object({
    body,
    params: getOrDelPostParams
});

export const deletePostSchema = object({
    params: getOrDelPostParams
});

export const getPostsSchema = object({query: getOrDelPostParams});

export const getPostSchema = object({params: getOrDelPostParams});

export type DeletePostParams = TypeOf<typeof getOrDelPostParams>;

export type GetPostsQuery = TypeOf<typeof getPostsQuery>;

export type GetPostParams = TypeOf<typeof getOrDelPostParams>;

export type CreatePostBody = TypeOf<typeof body>;

export type UpdatePostBody = TypeOf<typeof body>;

export type UpdatePostParams = TypeOf<typeof getOrDelPostParams>;

/** Validation middleware and OpenAPI need this, and we also may use TypeOf extract type for controller to use.
 In Validation middleware we must specify key as [query], in OpenAPI we must specify it as [in: query]
 **/
const getPostsQuery = object({
    from:
        string({
            required_error: 'From is required',
        }).openapi({
            param: {
                name: 'from',
                in: 'query',
            },
            example: '6',
        })
    ,
    offset: string({
        required_error: 'Offset is required',
    }).openapi({
        param: {
            name: 'offset',
            in: 'query',
        },
        example: '10',
    })
});


// For OpenAPI .yaml generating
openApiRegistry.registerPath({
    method: 'get',
    path: '/api/v1/posts',
    description: 'Get posts data',
    summary: 'Get posts',
    tags: ['Post'],
    // security: [{[openApiBearerAuth.name]: []}],
    request: {
        params: getPostsQuery
    },
    responses: {
        200: {
            description: 'Object with user data.',
            content: {
                // 'application/json': {
                // schema: xxx,
                // },
            },
        },
        204: {
            description: 'No content - successful operation',
        },
    },
});


openApiRegistry.registerPath({
    method: 'get',
    path: '/api/v1/posts/{id}',
    description: 'Get post data',
    summary: 'Get post',
    tags: ['Post'],
    // security: [{[openApiBearerAuth.name]: []}],
    request: {
        params: getOrDelPostParams
    },
    responses: {
        200: {
            description: 'Object with user data.',
            content: {
                // 'application/json': {
                // schema: xxx,
                // },
            },
        },
        204: {
            description: 'No content - successful operation',
        },
    },
});