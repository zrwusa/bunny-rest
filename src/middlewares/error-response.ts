import {NextFunction, Request, Response} from 'express';
import logger from '../helpers/logger';
import {wrapSend} from '../helpers/protocol';
import RESTFul from '../helpers/restful';
import {BL} from '../helpers/biz-logics';

export const errorResponse = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    const status = err.code || err.statusCode;

    wrapSend(res, RESTFul.internalServerError, BL.INTERNAL_SERVER_ERROR, {
        errorCode: status,
        errorMessage: err.message,
        errorStack: err.stack
    });
};

export default errorResponse;
