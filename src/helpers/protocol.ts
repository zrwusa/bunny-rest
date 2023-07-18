import {Response} from 'express';
import {BunnyProtocol} from '../types/protocol';
import type {BLCodeWithTranslation, RESTFulProtocol} from '../types';

export const wrapSend = (res: Response, restful: RESTFulProtocol, bizLogic: BLCodeWithTranslation, bunnyData: any = null, bizLogicPayload?: any) => {
    const {key, code} = bizLogic;
    const needBeSentBody: BunnyProtocol = {
        http: restful, bizLogic: {
            code,
            message: res.__(key),
            payload: bizLogicPayload,
        }, bunnyData: bunnyData
    };
    return res.status(restful.code).send(needBeSentBody).end();
};
