import {Response} from 'express';
import {RestProtocol} from '../utils/rest-maker';

export const wrapSend = (res: Response, protocol: RestProtocol, resData?: any) => {
    return res.status(protocol.httpCode).send({...protocol, resData}).end();
};
