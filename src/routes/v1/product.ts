import express from 'express';
import jwtAuth from '../../middlewares/jwt-auth';
import validateRequest from '../../middlewares/validate-request';
import {
    createProductSchema,
    deleteProductSchema,
    getProductSchema,
    updateProductSchema
} from '../../schemas/product-schema';
import {
    createProductCtrl,
    deleteProductCtrl,
    getProductCtrl,
    updateProductCtrl
} from '../../controllers/product-controller';

const productRouter = express.Router();

productRouter.post('/', [jwtAuth, validateRequest(createProductSchema)], createProductCtrl);

productRouter.put('/:id', [jwtAuth, validateRequest(updateProductSchema)], updateProductCtrl);

productRouter.get('/:id', [jwtAuth, validateRequest(getProductSchema)], getProductCtrl);

productRouter.delete('/:id', [jwtAuth, validateRequest(deleteProductSchema)], deleteProductCtrl);

export {productRouter};