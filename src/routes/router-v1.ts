import express, {Request, Response} from 'express';
import {createUserCtrl, deleteUserCtrl} from '../controllers/user-controller';
import validateRequest from '../middlewares/validate-request';
import {createUserSchema} from '../schemas/user-schema';
import {createSessionSchema} from '../schemas/session-schema';
import {createUserSessionCtrl, deleteSessionCtrl, getUserSessionCtrl} from '../controllers/session-controller';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import jwtAuth from '../middlewares/jwt-auth';
import {
    createProductSchema,
    deleteProductSchema,
    getProductSchema,
    updateProductSchema
} from '../schemas/product-schema';
import {
    createProductCtrl,
    deleteProductCtrl,
    getProductCtrl,
    updateProductCtrl
} from '../controllers/product-controller';
import logger from '../helpers/logger';
import {createOrderCtrl, deleteOrdersCtrl, getOrdersCtrl} from '../controllers/order-controller';
import {createUserAddressesSchema} from '../schemas/user-addresses-schema';
import {getOrdersProductsSchema} from '../schemas/orders-products-schema';
import {getOrdersProductsCtrl} from '../controllers/orders-products-controller';
import {createOrderProductsCtrl} from '../controllers/order-pruducts-controller';
import {createUserAddressesCtrl} from '../controllers/user-addresses-controller';
import {createOrderProductsSchema} from '../schemas/order-products-schema';
import {createPostCtrl, deletePostCtrl, getPostsCtrl} from '../controllers/post-controller';
import {getPostsSchema} from '../schemas/posts-schema';
import {createPostSchema, deletePostSchema} from '../schemas/post-schema';
import {BL} from '../helpers/biz-logics';

const routerV1 = express.Router();

/**
 * @openapi
 * /api/v1/ping:
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
    wrapSend(res, RESTFul.ok, BL.PONG);
});

/**
 * @openapi
 * '/api/v1/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserBody'
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
routerV1.post('/users', validateRequest(createUserSchema), createUserCtrl);

routerV1.delete('/users/:id', deleteUserCtrl);

routerV1.post('/users/:id/addresses', [validateRequest(createUserAddressesSchema), jwtAuth], createUserAddressesCtrl);

/**
 * @openapi
 * '/api/v1/sessions':
 *  post:
 *     tags:
 *     - Session
 *     summary: Create a session
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateSessionBody'
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
routerV1.post('/sessions', validateRequest(createSessionSchema), createUserSessionCtrl);

routerV1.get('/sessions', jwtAuth, getUserSessionCtrl);

routerV1.delete('/sessions', jwtAuth, deleteSessionCtrl);


routerV1.post('/products', [jwtAuth, validateRequest(createProductSchema)], createProductCtrl);

routerV1.put('/products/:id', [jwtAuth, validateRequest(updateProductSchema)], updateProductCtrl);
/**
 * @openapi
 * '/api/v1/products/{id}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Get a single product by the id
 *     parameters:
 *      - name: id
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
routerV1.get('/products/:id', [jwtAuth, validateRequest(getProductSchema)], getProductCtrl);

routerV1.delete('/products/:id', [jwtAuth, validateRequest(deleteProductSchema)], deleteProductCtrl);

routerV1.post('/orders', [jwtAuth], createOrderCtrl);

routerV1.get('/orders', [jwtAuth], getOrdersCtrl);

routerV1.delete('/orders/:id', [jwtAuth], deleteOrdersCtrl);

routerV1.post('/orders/:id/products', [validateRequest(createOrderProductsSchema), jwtAuth], createOrderProductsCtrl);

routerV1.get('/orders/products', [validateRequest(getOrdersProductsSchema), jwtAuth], getOrdersProductsCtrl);

routerV1.get('/posts', [validateRequest(getPostsSchema)], getPostsCtrl);

routerV1.delete('/posts/:id', [jwtAuth, validateRequest(deletePostSchema)], deletePostCtrl);

routerV1.post('/posts', [validateRequest(createPostSchema)], createPostCtrl);

export default routerV1;
