import {NextFunction, Request, Response} from 'express';
import logger from '../helpers/logger';
import {wrapSend} from '../helpers/protocol';
import {internalServerError} from '../helpers/rest-maker';

export const errorResponse = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    const status = err.code || err.statusCode;

    wrapSend(res, internalServerError({errorCode: status, errorMessage: err.message, errorStack: err.stack}));
};

export default errorResponse;
