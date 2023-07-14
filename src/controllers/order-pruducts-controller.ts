import {NextFunction, Request, Response} from 'express';
import RESTFul from '../helpers/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {Order} from '../entities/order-entity';
import {getPgRepo} from '../helpers/get-pg-repo';
import {Product} from '../entities/product-entity';
import {In} from 'typeorm';
import {CreateOrderProductsBody, CreateOrderProductsParams} from '../schemas/order-products-schema';

export async function createOrderProductsCtrl(req: Request<CreateOrderProductsParams, any, CreateOrderProductsBody>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    const orderRepo = getPgRepo(Order);
    const order = await orderRepo.findOne(id);

    if (!order) {
        return wrapSend(res, RESTFul.notFound({bizLogicMessage: res.__('ORDER_NOT_EXIST')}));
    } else {
        const productsRepo = getPgRepo(Product);
        const products = await productsRepo.find({where: {id: In(body)}});
        try {
            order.products = products;
            const savedOrder = await orderRepo.save(order);
            return wrapSend(res, RESTFul.ok(), savedOrder);
        } catch (e) {
            next(e);
        }
    }
}
