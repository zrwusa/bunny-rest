import {NextFunction, Request, Response} from 'express';
import RESTFul from '../helpers/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {findOrdersProducts} from '../services/orders-pruducts-service';
import {ParamsDictionary} from 'express-serve-static-core';
import {GetOrdersProductsQuery} from '../schemas/orders-products-schema';

// todo can we use Zob schema as the Request type?
export async function getOrdersProductsCtrl(req: Request<ParamsDictionary, any, any, GetOrdersProductsQuery>, res: Response, next: NextFunction) {
    const {minPrice, maxPrice} = req.query;
    try {
        const orders = await findOrdersProducts({minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice)});
        return wrapSend(res, RESTFul.ok(res), orders);
    } catch (e) {
        next(e);
    }
}

