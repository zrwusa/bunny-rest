import express from 'express';
import validateResource from '../middlewares/validate-schema';
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
import jwtAuth from '../middlewares/jwt-auth';
import {deleteSessionHandler, getUserSessionsHandler} from '../controllers/session-controller';

const privateRouter = express.Router();
privateRouter.use(jwtAuth);

privateRouter.get('/sessions', getUserSessionsHandler);

privateRouter.delete('/sessions', deleteSessionHandler);

privateRouter.post(
    '/products',
    [validateResource(createProductSchema)],
    createProductHandler
);


privateRouter.put(
    '/products/:productId',
    [validateResource(updateProductSchema)],
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
privateRouter.get(
    '/products/:productId',
    validateResource(getProductSchema),
    getProductHandler
);

privateRouter.delete(
    '/products/:productId',
    [validateResource(deleteProductSchema)],
    deleteProductHandler
);


export default privateRouter;
