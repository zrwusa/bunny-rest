import express from 'express';
import {jwtAuth, validateRequest} from '../../middlewares';
import {createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema} from '../../schemas';
import {createProductCtrl, deleteProductCtrl, getProductCtrl, updateProductCtrl} from '../../controllers';

const productRouter = express.Router();

productRouter.post('/', [jwtAuth, validateRequest(createProductSchema)], createProductCtrl);

productRouter.put('/:id', [jwtAuth, validateRequest(updateProductSchema)], updateProductCtrl);

productRouter.get('/:id', [jwtAuth, validateRequest(getProductSchema)], getProductCtrl);

productRouter.delete('/:id', [jwtAuth, validateRequest(deleteProductSchema)], deleteProductCtrl);

export {productRouter};