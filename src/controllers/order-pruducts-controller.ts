import type {NextFunction, Request, Response} from 'express';
import {BizLogicFailed, wrapSend} from '../helpers';
import {BL, httpStatusMap} from '../constants';
import {createOrderProducts} from '../services';

export async function createOrderProductsCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const result = await createOrderProducts(id, body);
        if (result instanceof BizLogicFailed) {
            const {restful, bizLogic} = result;
            return wrapSend(res, restful, bizLogic);
        } else {
            return wrapSend(res, httpStatusMap.ok, BL.ASSOCIATE_ORDER_PRODUCTS_SUCCESS, result);
        }
    } catch (err) {
        next(err);
    }

}
