import {NextFunction, Request, Response} from 'express';
import {AnyZodObject} from 'zod';

const validate = (schema: AnyZodObject) =>
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
            // todo 400?
            return res.status(400).send(e.errors);
        }
    };

export default validate;
