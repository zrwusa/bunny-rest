import {NextFunction, Request, Response} from 'express';
import logger from '../utils/logger';

export const errorResponse = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);

    res.status(err.code || 500).json({
        type: err.constructor.name,
        code: err.code || 500,
        message: err.message,
        stack: err.stack
    });
};

export default errorResponse;
