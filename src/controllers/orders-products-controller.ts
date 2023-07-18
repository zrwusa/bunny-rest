import {NextFunction, Request, Response} from 'express';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import {findOrdersProducts} from '../services/orders-pruducts-service';
import {ParamsDictionary} from 'express-serve-static-core';
import {GetOrdersProductsQuery} from '../schemas/orders-products-schema';
import {BL} from '../helpers/biz-logics';

export async function getOrdersProductsCtrl(req: Request<ParamsDictionary, any, any, GetOrdersProductsQuery>, res: Response, next: NextFunction) {
    const {minPrice, maxPrice} = req.query;
    try {
        const orders = await findOrdersProducts({minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice)});
        return wrapSend(res, RESTFul.ok, BL.GET_ORDERS_PRODUCTS_SUCCESS, orders);
    } catch (e) {
        next(e);
    }
}

