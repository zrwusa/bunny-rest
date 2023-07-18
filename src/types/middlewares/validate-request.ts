import {ZodTypeAny} from 'zod';

export type ValidateSchema = {
    body?: ZodTypeAny;
    query?: ZodTypeAny;
    params?: ZodTypeAny;
    parse: ZodTypeAny['parse'];
};