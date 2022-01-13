import {NextFunction, Request, Response} from 'express';
import {createOrder} from '../services/order-service';
import {ok} from '../utils/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {Order} from '../entities/order-entity';

export async function createOrderHandler(req: Request<{}, {}, Order>, res: Response, next: NextFunction) {
    const body = req.body;

    try {
        const product = await createOrder(body);
        return wrapSend(res, ok(), product);
    } catch (e) {
        // todo need to specify error type, i.e. validation error type
        next(e);
    }
}
