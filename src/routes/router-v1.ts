import express, {Request, Response} from 'express';
import {createUserAddressHandler, createUserHandler, deleteUserHandler} from '../controllers/user-controller';
import validateRequest from '../middlewares/validate-request';
import {createUserSchema} from '../validation-schemas/user-schema';
import {createSessionSchema} from '../validation-schemas/session-schema';
import {createUserSessionHandler, deleteSessionHandler, getUserSessionHandler} from '../controllers/session-controller';
import {ok} from '../utils/rest-maker';
import {wrapSend} from '../helpers/protocol';
import jwtAuth from '../middlewares/jwt-auth';
import {
    createProductSchema,
    deleteProductSchema,
    getProductSchema,
    updateProductSchema
} from '../validation-schemas/product-schema';
import {
    createProductHandler,
    deleteProductHandler,
    getProductHandler,
    updateProductHandler
} from '../controllers/product-controller';
import logger from '../utils/logger';
import {createOrderHandler, getOrdersHandler} from '../controllers/order-controller';
import {createUserAddressesSchema} from '../validation-schemas/users-addresses-schema';
import {createOrderProductsSchema, getOrdersProductsSchema} from '../validation-schemas/orders-products-schema';
import {getOrdersProductsHandler} from '../controllers/orders-pruducts-controller';
import {createOrderProductsHandler} from '../controllers/order-pruducts-controller';

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
    logger.info('yeah it ran');
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
routerV1.post('/users', validateRequest(createUserSchema), createUserHandler);

routerV1.delete('/users/:id', deleteUserHandler);

routerV1.post('/users/:id/addresses', [validateRequest(createUserAddressesSchema), jwtAuth], createUserAddressHandler);

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
routerV1.post('/sessions', validateRequest(createSessionSchema), createUserSessionHandler);


routerV1.get('/sessions', jwtAuth, getUserSessionHandler);

routerV1.delete('/sessions', jwtAuth, deleteSessionHandler);

routerV1.post(
    '/products',
    [jwtAuth, validateRequest(createProductSchema)],
    createProductHandler
);


routerV1.put(
    '/products/:productId',
    [jwtAuth, validateRequest(updateProductSchema)],
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
    [jwtAuth, validateRequest(getProductSchema)],
    getProductHandler
);

routerV1.delete(
    '/products/:productId',
    [jwtAuth, validateRequest(deleteProductSchema)],
    deleteProductHandler
);


routerV1.post(
    '/orders',
    [jwtAuth],
    createOrderHandler
);

routerV1.get(
    '/orders',
    [jwtAuth],
    getOrdersHandler
);

routerV1.post('/orders/:id/products', [validateRequest(createOrderProductsSchema), jwtAuth], createOrderProductsHandler);


routerV1.get('/orders/products', [validateRequest(getOrdersProductsSchema), jwtAuth], getOrdersProductsHandler);

export default routerV1;
