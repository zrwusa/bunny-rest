import express from 'express';
import validateResource from '../middlewares/validate-schema';
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
import deserializeUser from '../middlewares/deserialize-user';

const privateRouter = express.Router();
privateRouter.use(deserializeUser);

privateRouter.post(
    '/api/products',
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
);


privateRouter.put(
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
privateRouter.get(
    '/api/products/:productId',
    validateResource(getProductSchema),
    getProductHandler
);

privateRouter.delete(
    '/api/products/:productId',
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler
);

export default privateRouter;
