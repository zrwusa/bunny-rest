import {Response} from 'express';
import {RESTFulProtocol} from './restful';
import {BunnyProtocol} from '../types/protocol';
import {BLCodeWithTranslation} from '../types/helpers/biz-logic';

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
