import {NextFunction, Request, Response} from 'express';
import {ok} from '../utils/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {findOrdersProducts} from '../services/orders-pruducts-service';
import {ParamsDictionary} from 'express-serve-static-core';

// todo can we use Zob schema as the Request type?
export async function getOrdersProductsHandler(req: Request<ParamsDictionary, any, any, { minPrice: string, maxPrice: string }>, res: Response, next: NextFunction) {
    const {minPrice, maxPrice} = req.query;
    try {
        const orders = await findOrdersProducts({minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice)});
        return wrapSend(res, ok(), orders);
    } catch (e) {
        next(e);
    }
}

