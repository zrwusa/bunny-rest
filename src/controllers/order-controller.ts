import {NextFunction, Request, Response} from 'express';
import {createOrder} from '../services/order-service';
import RESTFul from '../helpers/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {Order} from '../entities/order-entity';
import {ParamsDictionary} from '../types/express-enhanced';
import {CreateOrderBody, DeleteOrderParam} from '../schemas/order-schema';
import {PgDS} from '../helpers/postgres-data-source';

export async function createOrderCtrl(req: Request<ParamsDictionary, any, CreateOrderBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const order = await createOrder(body);
        return wrapSend(res, RESTFul.ok(), order);
    } catch (e) {
        // todo need to specify error type, i.e. validation error type
        next(e);
    }
}

export async function getOrdersCtrl(req: Request, res: Response, next: NextFunction) {
    const orderRepo = PgDS.getRepository(Order);
    try {
        const orders = await orderRepo.find();
        return wrapSend(res, RESTFul.ok(), orders);
    } catch (e) {
        next(e);
    }
}

export async function deleteOrdersCtrl(req: Request<DeleteOrderParam>, res: Response, next: NextFunction) {
    const orderRepo = PgDS.getRepository(Order);
    const {id} = req.params;
    try {
        const orders = await orderRepo.delete(id);
        return wrapSend(res, RESTFul.ok(), orders);
    } catch (e) {
        next(e);
    }
}
