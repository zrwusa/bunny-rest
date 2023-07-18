import {object, string, TypeOf} from 'zod';
import { openApiBearerAuth, openApiRegistry} from '../helpers/zod-openapi';

const query = object({
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
    security: [{[openApiBearerAuth.name]: []}],
    request: {
        params: query
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

export const getPostsSchema = object({query});

export type GetPostsQuery = TypeOf<typeof query>;
