import {NextFunction, Request, Response} from 'express';
import {createOrder} from '../services/order-service';
import {ok} from '../helpers/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {Order} from '../entities/order-entity';
import {getPgRepo} from '../helpers/get-pg-repo';
import {ParamsDictionary} from '../types/express-enhanced';
import {CreateOrderBody} from '../schemas/order-schema';

export async function createOrderCtrl(req: Request<ParamsDictionary, any, CreateOrderBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const order = await createOrder(body);
        return wrapSend(res, ok(), order);
    } catch (e) {
        // todo need to specify error type, i.e. validation error type
        next(e);
    }
}

export async function getOrdersCtrl(req: Request, res: Response, next: NextFunction) {
    const orderRepo = getPgRepo(Order);
    try {
        const orders = await orderRepo.find();
        return wrapSend(res, ok(), orders);
    } catch (e) {
        next(e);
    }
}