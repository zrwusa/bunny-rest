import type {NextFunction, Request, Response} from 'express';
import {RESTFul, wrapSend} from '../helpers';
import {findOrdersProductsAssoc} from '../services';
import type {ParamsDictionary} from '../types';
import {GetOrdersProductsAssocQuery} from '../schemas';
import {BL} from '../constants';

export async function getOrdersProductsAssocCtrl(req: Request<ParamsDictionary, any, any, GetOrdersProductsAssocQuery>, res: Response, next: NextFunction) {
    const {minPrice, maxPrice} = req.query;
    try {
        const ordersProductsAssoc = await findOrdersProductsAssoc({minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice)});
        return wrapSend(res, RESTFul.ok, BL.GET_ORDERS_PRODUCTS_ASSOC_SUCCESS, ordersProductsAssoc);
    } catch (err) {
        next(err);
    }
}

