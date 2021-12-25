import express, {Request, Response} from 'express';
import {createUserHandler} from '../controllers/user-controller';
import validateResource from '../middlewares/validate-resource';
import {createUserSchema} from '../schemas/user-schema';
import {createSessionSchema} from '../schemas/session-schema';
import {
    createUserSessionHandler,
    deleteSessionHandler,
    getUserSessionsHandler
} from '../controllers/session-controller';
import requireUser from '../middlewares/require-user';
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

const router = express.Router();

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
router.get('/ping', (req: Request, res: Response) => res.status(200).send('pong'));

/**
 * @openapi
 * '/api/users':
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
router.post('/api/users', validateResource(createUserSchema), createUserHandler);

/**
 * @openapi
 * '/api/sessions':
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
router.post(
    '/api/sessions',
    validateResource(createSessionSchema),
    createUserSessionHandler
);

router.get('/api/sessions', requireUser, getUserSessionsHandler);

router.delete('/api/sessions', requireUser, deleteSessionHandler);

router.post(
    '/api/products',
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
);


router.put(
    '/api/products/:productId',
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
);
/**
 * @openapi
 * '/api/products/{productId}':
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
router.get(
    '/api/products/:productId',
    validateResource(getProductSchema),
    getProductHandler
);

router.delete(
    '/api/products/:productId',
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler
);

export default router;
