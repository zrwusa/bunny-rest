import jwtAuth from '../../middlewares/jwt-auth';
import {createOrderCtrl, deleteOrdersCtrl, getOrdersCtrl} from '../../controllers/order-controller';
import validateRequest from '../../middlewares/validate-request';
import {createOrderProductsSchema} from '../../schemas/order-products-schema';
import {createOrderProductsCtrl} from '../../controllers/order-pruducts-controller';
import {getOrdersProductsSchema} from '../../schemas/orders-products-schema';
import {getOrdersProductsCtrl} from '../../controllers/orders-products-controller';
import express from 'express';

const orderRouter = express.Router();

orderRouter.post('/', [jwtAuth], createOrderCtrl);

orderRouter.get('/', [jwtAuth], getOrdersCtrl);

orderRouter.delete('/:id', [jwtAuth], deleteOrdersCtrl);

orderRouter.post('/:id/products', [validateRequest(createOrderProductsSchema), jwtAuth], createOrderProductsCtrl);

orderRouter.get('/products', [validateRequest(getOrdersProductsSchema), jwtAuth], getOrdersProductsCtrl);

export {
    orderRouter
}