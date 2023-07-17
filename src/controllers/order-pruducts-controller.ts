import {NextFunction, Request, Response} from 'express';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import {Order} from '../entities/order-entity';
import {Product} from '../entities/product-entity';
import {In} from 'typeorm';
import {PgDS} from '../helpers/postgres-data-source';
import {BL} from '../helpers/biz-logics';

export async function createOrderProductsCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    const orderRepo = PgDS.getRepository(Order);
    const order = await orderRepo.findOneBy({id: id});

    if (!order) {
        return wrapSend(res, RESTFul.notFound, BL.ORDER_NOT_EXIST);
    } else {
        const productsRepo = PgDS.getRepository(Product);
        const products = await productsRepo.find({where: {id: In(body)}});
        try {
            order.products = products;
            const savedOrder = await orderRepo.save(order);
            return wrapSend(res, RESTFul.ok, BL.ASSOCIATE_ORDER_PRODUCTS_SUCCESS, savedOrder);
        } catch (e) {
            next(e);
        }
    }
}
