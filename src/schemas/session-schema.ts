import {object, string} from 'zod';
import {openApiRegistry} from '../helpers/zod-openapi';

const bodySchema = object({
    email: string({
        required_error: 'Email is required',
    }),
    password: string({
        required_error: 'Password is required',
    }),
});

export const createSessionSchema = object({
    body: bodySchema,
});

// For OpenAPI .yaml generating
openApiRegistry.registerPath({
    method: 'post',
    path: '/api/v1/sessions',
    description: 'Create a session',
    summary: 'Create a session',
    tags: ['Auth'],
    security: [],
    request: {
        body: {
            content: {
                'application/json': {
                    schema: bodySchema,
                    example: {
                        email: 'test@example.com',
                        password: 'Password_123'
                    }
                },
            },
            required: true,
        },
    },
    responses: {
        200: {
            description: 'Success',
            content: {},
        },
        409: {
            description: 'Conflict',
        },
        400: {
            description: 'Bad request',
        },
    },
});