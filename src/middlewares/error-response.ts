import type {NextFunction, Request, Response} from 'express';
import {logger} from '../helpers/logger';
import {wrapSend} from '../helpers';
import {httpStatusMap} from '../constants/http-status-map';
import {BL} from '../constants';

export const errorResponse = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    const status = err.code || err.statusCode;

    wrapSend(res, httpStatusMap.internalServerError, BL.INTERNAL_SERVER_ERROR, null, {
        code: status,
        message: err.message,
        stack: err.stack
    });
};

export default errorResponse;
