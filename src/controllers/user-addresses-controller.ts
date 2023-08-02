import type {NextFunction, Request, Response} from 'express';
import {BizLogicFailed, wrapSend} from '../helpers';
import {BL, httpStatusMap} from '../constants';
import {createUserAddresses} from '../services';

export async function createUserAddressesCtrl(req: Request, res: Response, next: NextFunction) {
    const {body, params} = req;
    const {id} = params;

    try {
        const result = await createUserAddresses(id, body);
        if (result instanceof BizLogicFailed) {
            const {restful, bizLogic} = result;
            return wrapSend(res, restful, bizLogic);
        } else {
            return wrapSend(res, httpStatusMap.ok, BL.ASSOCIATE_USER_ADDRESSES_SUCCESS, result);
        }
    } catch (err) {
        next(err);
    }
}
