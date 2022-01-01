import express, {Request, Response} from 'express';
import {createUserHandler, deleteUserHandler} from '../controllers/user-controller';
import validateResource from '../middlewares/validate-schema';
import {createUserSchema} from '../schemas/user-schema';
import {createSessionSchema} from '../schemas/session-schema';
import {
    createUserSessionHandler,
    deleteSessionHandler,
    getUserSessionsHandler
} from '../controllers/session-controller';
import {ok} from '../utils/rest-maker';
import {wrapSend} from '../helpers/protocol';
import jwtAuth from '../middlewares/jwt-auth';
import {
    createProductSchema,
    deleteProductSchema,
    getProductSchema,
    updateProductSchema
} from '../schemas/product-schema';
import {
    createProductHandler,
    deleteProductHandler,
    getProductHandler,
    updateProductHandler
} from '../controllers/product-controller';

const routerV1 = express.Router();

/**
 * @openapi
 * /ping:
 *  get:
 *     tags:
 *     - Ping
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
routerV1.get('/ping', (req: Request, res: Response) => {
    wrapSend(res, ok(), res.__('PONG'));
});

/**
 * @openapi
 * '/api/public/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
routerV1.post('/users', validateResource(createUserSchema), createUserHandler);
routerV1.delete('/users/:userId', deleteUserHandler);

/**
 * @openapi
 * '/api/public/sessions':
 *  post:
 *     tags:
 *     - Session
 *     summary: Create a session
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateSessionInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateSessionResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
routerV1.post('/sessions', validateResource(createSessionSchema), createUserSessionHandler);


routerV1.get('/sessions', jwtAuth, getUserSessionsHandler);

routerV1.delete('/sessions', jwtAuth, deleteSessionHandler);

routerV1.post(
    '/products',
    [jwtAuth, validateResource(createProductSchema)],
    createProductHandler
);


routerV1.put(
    '/products/:productId',
    [jwtAuth, validateResource(updateProductSchema)],
    updateProductHandler
);
/**
 * @openapi
 * '/api/private/products/{productId}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Get a single product by the productId
 *     parameters:
 *      - name: productId
 *        in: path
 *        description: The id of the product
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Product'
 *       404:
 *         description: Product not found
 */
routerV1.get(
    '/products/:productId',
    [jwtAuth, validateResource(getProductSchema)],
    getProductHandler
);

routerV1.delete(
    '/products/:productId',
    [jwtAuth, validateResource(deleteProductSchema)],
    deleteProductHandler
);


export default routerV1;
