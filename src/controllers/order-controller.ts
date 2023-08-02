import type {NextFunction, Request, Response} from 'express';
import type {ParamsDictionary} from '../types';

import {createOrder, deleteOrder, findOrders} from '../services';
import {wrapSend} from '../helpers';
import {CreateOrderBody} from '../schemas';
import {BL, httpStatusMap} from '../constants';

export async function createOrderCtrl(req: Request<ParamsDictionary, any, CreateOrderBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const order = await createOrder(body);
        return wrapSend(res, httpStatusMap.ok, BL.CREATE_ORDER_SUCCESS, order);
    } catch (err) {
        next(err);
    }
}

export async function getOrdersCtrl(req: Request, res: Response, next: NextFunction) {
    try {
        const orders = await findOrders();
        return wrapSend(res, httpStatusMap.ok, BL.GET_ORDERS_SUCCESS, orders);
    } catch (err) {
        next(err);
    }
}

export async function deleteOrderCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const orders = await deleteOrder(id);
        return wrapSend(res, httpStatusMap.ok, BL.DELETE_ORDER_SUCCESS, orders);
    } catch (err) {
        next(err);
    }
}
