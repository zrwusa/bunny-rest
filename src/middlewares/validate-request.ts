import type {NextFunction, Request, Response} from 'express';
import {wrapSend} from '../helpers';
import {RESTFul} from '../helpers/restful';
import {BL} from '../constants';
import {ValidateSchema} from '../types';

export const validateRequest = (schema: ValidateSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        const {body, query, params} = req;

        if (!body && !query && !params) {
            return wrapSend(res, RESTFul.internalServerError, BL.VALIDATE_REQUEST_FAILED, null, {error: 'Invalid schema, the schema must include one of body, query, params keys'});
        }

        try {
            schema.parse({
                body: body,
                query: query,
                params: params,
            });
            next();
        } catch (e: any) {
            return wrapSend(res, RESTFul.badRequest, BL.VALIDATE_REQUEST_FAILED, null, e.errors);
        }
    };

export default validateRequest;
