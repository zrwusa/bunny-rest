import {jwtAuth, validateRequest} from '../../middlewares';
import {
    createOrderCtrl,
    createOrderProductsCtrl,
    deleteOrderCtrl,
    getOrdersCtrl,
    getOrdersProductsAssocCtrl
} from '../../controllers';
import {createOrderProductsSchema, getOrdersProductsAssocSchema} from '../../schemas';
import express from 'express';

const orderRouter = express.Router();

orderRouter.post('/', [jwtAuth], createOrderCtrl);

orderRouter.get('/', [jwtAuth], getOrdersCtrl);

orderRouter.delete('/:id', [jwtAuth], deleteOrderCtrl);

orderRouter.post('/:id/products', [validateRequest(createOrderProductsSchema), jwtAuth], createOrderProductsCtrl);

orderRouter.get('/products', [validateRequest(getOrdersProductsAssocSchema), jwtAuth], getOrdersProductsAssocCtrl);

export {orderRouter};