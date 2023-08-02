import express from 'express';
import {jwtAuth, validateRequest} from '../../middlewares';
import {
    createProductSchema,
    deleteProductSchema,
    getProductListSchema,
    getProductSchema,
    updateProductSchema,
} from '../../schemas';
import {
    createProductCtrl,
    deleteProductCtrl,
    getProductCtrl,
    getProductListCtrl,
    updateProductCtrl,
} from '../../controllers';

const productRouter = express.Router();

productRouter.post('/', [jwtAuth, validateRequest(createProductSchema)], createProductCtrl);

productRouter.get('/:id', [jwtAuth, validateRequest(getProductSchema)], getProductCtrl);

productRouter.get('/', [jwtAuth, validateRequest(getProductListSchema)], getProductListCtrl);

productRouter.put('/:id', [jwtAuth, validateRequest(updateProductSchema)], updateProductCtrl);

productRouter.delete('/:id', [jwtAuth, validateRequest(deleteProductSchema)], deleteProductCtrl);

export {productRouter};