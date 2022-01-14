import {NextFunction, Request, Response} from 'express';
import {createOrder} from '../services/order-service';
import {ok} from '../utils/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {Order} from '../entities/order-entity';
import {getPgRepo} from '../utils/get-pg-repo';

export async function createOrderHandler(req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    try {
        const order = await createOrder(body);
        return wrapSend(res, ok(), order);
    } catch (e) {
        // todo need to specify error type, i.e. validation error type
        next(e);
    }
}

export async function getOrdersHandler(req: Request, res: Response, next: NextFunction) {
    const orderRepo = getPgRepo(Order);
    try {
        const orders = await orderRepo.find();
        return wrapSend(res, ok(), orders);
    } catch (e) {
        next(e);
    }
}
