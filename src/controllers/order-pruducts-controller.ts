import {NextFunction, Request, Response} from 'express';
import {notFound, ok} from '../utils/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {Order} from '../entities/order-entity';
import {getPgRepo} from '../utils/get-pg-repo';
import {Product} from '../entities/product-entity';
import {In} from 'typeorm';

export async function createOrderProductsHandler(req: Request, res: Response, next: NextFunction) {
    const {id: orderId} = req.params;
    const productIds = req.body;

    const orderRepo = getPgRepo(Order);
    const order = await orderRepo.findOne(orderId);

    if (!order) {
        return wrapSend(res, notFound({bizLogicMessage: res.__('ORDER_NOT_EXIST')}));
    } else {
        const productsRepo = getPgRepo(Product);
        const products = await productsRepo.find({where: {id: In(productIds)}});
        try {
            order.products = products;
            const savedOrder = await orderRepo.save(order);
            return wrapSend(res, ok(), savedOrder);
        } catch (e) {
            next(e);
        }
    }
}
