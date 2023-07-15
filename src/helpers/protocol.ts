import {Response} from 'express';
import {BizLogic} from './biz-logics';

export interface BunnyProtocol {
    httpCode: number,
    httpMessage?: string,
    httpDescription: string,
    bizLogicCode?: string,
    bizLogicMessage?: string,
    errorCode?: string,
    errorMessage?: string,
    errorStack?: string
}

export const wrapSend = (res: Response, bunnyProtocol: BunnyProtocol, bizLogic: BizLogic, resData?: any) => {
    const bizLogicToProtocol = bizLogic ? {
        bizLogicCode: bizLogic?.code,
        bizLogicMessage: bizLogic?.key ? res.__(bizLogic.key) : '',
    } : {};
    return res.status(bunnyProtocol.httpCode).send({...bunnyProtocol, ...bizLogicToProtocol, resData}).end();
};
