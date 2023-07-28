import {NextFunction, Request, Response} from 'express';
import logger from '../helpers/logger';
import {wrapSend} from '../helpers/protocol';
import RESTFul from '../helpers/restful';
import {BL} from '../constants/biz-logics';

export const errorResponse = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    const status = err.code || err.statusCode;

    wrapSend(res, RESTFul.internalServerError, BL.INTERNAL_SERVER_ERROR, null, {
        code: status,
        message: err.message,
        stack: err.stack
    });
};

export default errorResponse;
