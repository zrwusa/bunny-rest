import {Response} from 'express';

export const sendProtocol = (res: Response, err: any) => {
    res.status(parseInt(err.code)).send({
        type: err.constructor.name,
        code: err.code,
        message: err.message,
        stack: err.stack
    });
};
