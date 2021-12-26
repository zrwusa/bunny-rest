import {NextFunction, Request, Response} from 'express';
import logger from '../utils/logger';

export const errorResponse = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    const status = err.code || err.statusCode;
    let statusCode = parseInt(status);
    if (statusCode < 100 || statusCode > 599) {
        statusCode = 500;
    }

    res.status(statusCode || 500).send({
        type: err.constructor.name,
        code: status.toString() || 'unknown',
        message: err.message,
        stack: err.stack
    });
};

export default errorResponse;
