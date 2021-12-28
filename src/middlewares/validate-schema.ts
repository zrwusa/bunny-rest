import {NextFunction, Request, Response} from 'express';
import {AnyZodObject} from 'zod';
import {wrapSend} from '../helpers/protocol';
import {unprocessableEntity} from '../utils/rest-maker';

const validateSchema = (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        const {body, query, params} = req;
        try {
            schema.parse({
                body: body,
                query: query,
                params: params,
            });
            next();
        } catch (e: any) {
            // const err: any = new UnprocessableEntityError();
            // const status = err.code || err.statusCode;
            // let statusCode = parseInt(status);
            //
            // return res.status(statusCode).send({
            //     type: err.constructor.name,
            //     code: status && status.toString() || 'unknown',
            //     message: e.errors,
            //     stack: err.stack
            // });
            return wrapSend(res, unprocessableEntity(), e.errors);
        }
    };

export default validateSchema;
