import type {Response} from 'express';
import type {BLCodeAndTrans, RESTFulProtocol, APIProtocol} from '../types';
export class BizLogicFailed {
    public restful: RESTFulProtocol;
    public bizLogic: BLCodeAndTrans;
    constructor(restful:  RESTFulProtocol, bizLogic: BLCodeAndTrans) {
        this.restful = restful;
        this.bizLogic = bizLogic;
    }
}
export const wrapSend = (res: Response, restful: RESTFulProtocol, bizLogic: BLCodeAndTrans, resData: any = null, bizLogicPayload?: any) => {
    const {key, code} = bizLogic;
    const needBeSentBody: APIProtocol = {
        http: restful, bizLogic: {
            code,
            message: res.__(key),
            payload: bizLogicPayload,
        }, resData: resData
    };
    return res.status(restful.code).send(needBeSentBody).end();
};
