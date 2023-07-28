import {NextFunction, Request, Response} from 'express';
import {createOrder} from '../services/order-service';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import {OrderEntity} from '../entities/order-entity';
import {ParamsDictionary} from '../types/express-enhanced';
import {CreateOrderBody} from '../schemas/order-schema';
import {PgDS} from '../helpers/postgres-data-source';
import {BL} from '../constants/biz-logics';

export async function createOrderCtrl(req: Request<ParamsDictionary, any, CreateOrderBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const order = await createOrder(body);
        return wrapSend(res, RESTFul.ok, BL.CREATE_ORDER_SUCCESS, order);
    } catch (e) {
        next(e);
    }
}

export async function getOrdersCtrl(req: Request, res: Response, next: NextFunction) {
    const orderRepo = PgDS.getRepository(OrderEntity);
    try {
        const orders = await orderRepo.find();
        return wrapSend(res, RESTFul.ok, BL.GET_ORDERS_SUCCESS, orders);
    } catch (e) {
        next(e);
    }
}

export async function deleteOrdersCtrl(req: Request, res: Response, next: NextFunction) {
    const orderRepo = PgDS.getRepository(OrderEntity);
    const {id} = req.params;
    try {
        const orders = await orderRepo.delete(id);
        return wrapSend(res, RESTFul.ok, BL.DELETE_ORDER_SUCCESS, orders);
    } catch (e) {
        next(e);
    }
}
