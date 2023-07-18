import {object, string, TypeOf} from 'zod';
import {openApiRegistry} from '../helpers/zod-openapi';

const body = object({
    name: string({
        required_error: 'Name is required',
    }),
    password: string({
        required_error: 'Password is required',
    })
        .min(6, 'Password too short - should be 6 chars minimum'),
    passwordConfirmation: string({
        required_error: 'passwordConfirmation is required',
    }),
    email: string({
        required_error: 'Email is required',
    })
        .email('Not a valid email'),
})
    .refine((data) => data.password === data.passwordConfirmation, {
        message: 'Passwords do not match',
        path: ['passwordConfirmation'],
    });

const params = object({
    id: string({
        required_error: 'user id is required',
    }),
});

// For OpenAPI .yaml generating
openApiRegistry.registerPath({
    method: 'post',
    path: '/api/v1/users',
    description: 'Register a user',
    summary: 'Register a user',
    tags: ['User'],
    security: [],
    request: {
        body: {
            content: {
                'application/json': {
                    schema: body,
                    example: {
                        name: 'Pablo Rios',
                        password: 'Password_123',
                        passwordConfirmation: 'Password_123',
                        email: 'test@example.com'
                    }
                }
            },
            required: true,
        },
    },
    responses: {
        200: {
            description: 'Success',
            content: {
                // 'application/json': {
                //     schema: createUserResponseSchema,
                // },
            },
        },
        409: {
            description: 'Conflict',
        },
        400: {
            description: 'Bad request',
        },
    },
});

// TODO need implement i18n for zod
export const createUserSchema = object({
    body,
});

export type CreateUserBody = TypeOf<typeof body>;

export type DeleteUserParams = TypeOf<typeof params>;


