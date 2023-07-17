import {object, string} from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateSessionBody:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: zrwusa@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    CreateSessionResponse:
 *      type: object
 *      properties:
 *        bizLogicCode:
 *          type: string
 *        bizLogicMessage:
 *          type: string
 */

export const createSessionSchema = object({
    body: object({
        email: string({
            required_error: 'Email is required',
        }),
        password: string({
            required_error: 'Password is required',
        }),
    }),
});
