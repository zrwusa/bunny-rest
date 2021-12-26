'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.createUserSchema = void 0;
const zod_1 = require('zod');
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: zrwusa@example.com
 *        name:
 *          type: string
 *          default: Pablo Rios
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: 'Name is required',
        }),
        password: (0, zod_1.string)({
            required_error: 'Name is required',
        }).min(6, 'Password too short - should be 6 chars minimum'),
        passwordConfirmation: (0, zod_1.string)({
            required_error: 'passwordConfirmation is required',
        }),
        email: (0, zod_1.string)({
            required_error: 'Email is required',
        }).email('Not a valid email'),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: 'Passwords do not match',
        path: ['passwordConfirmation'],
    }),
});
