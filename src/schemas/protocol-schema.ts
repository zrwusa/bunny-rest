import {E_ProtocolSchemaType, MakeProtocolSchemaOptions} from '../types';
import {any, array, number, object, string} from 'zod';
import {httpStatusMap} from '../constants';

export const makeProtocolSchema = (name: string, options: MakeProtocolSchemaOptions) => {
    const {httpStatus, bizLogicCodeAndTrans, protocolSchemaType, resDataExample} = options;
    const {code, message, description} = httpStatusMap[httpStatus]
    const httpSchema = object({
        code: number().openapi({example: code}),
        message: string().openapi({example: message}),
        description: string().openapi({example: description})
    });

    const {code: bizLogicCode, en} = bizLogicCodeAndTrans;

    const bizLogicSchema = object({
        code: string().openapi({example: bizLogicCode}),
        message: string().openapi({example: en}),
        ...(protocolSchemaType === E_ProtocolSchemaType.VALIDATION ? {
            payload: array(any()).openapi({
                example: [
                    {
                        'code': 'invalid_type',
                        'expected': 'string',
                        'received': 'undefined',
                        'path': [
                            'query',
                            'skip'
                        ],
                        'message': 'skip is required'
                    },
                    {
                        'code': 'invalid_type',
                        'expected': 'string',
                        'received': 'undefined',
                        'path': [
                            'query',
                            'take'
                        ],
                        'message': 'take is required'
                    }
                ]
            }),
        } : {}),
        ...(protocolSchemaType === E_ProtocolSchemaType.INTERNAL_ERROR ? {
            payload: any().openapi({
                example: {
                    'code': '23505',
                    'message': 'duplicate key value violates unique constraint "UQ_e12875dfb3b1d92d7d7c5377e22"',
                    'stack': 'QueryFailedError: duplicate key value violates unique constraint "UQ_e12875dfb3b1d92d7d7c5377e22"\n    at PostgresQueryRunner.query (/Users/revone/projects/bunny-rest/src/driver/postgres/PostgresQueryRunner.ts:299:19)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at InsertQueryBuilder.execute (/Users/revone/projects/bunny-rest/src/query-builder/InsertQueryBuilder.ts:163:33)\n    at SubjectExecutor.executeInsertOperations (/Users/revone/projects/bunny-rest/src/persistence/SubjectExecutor.ts:434:42)\n    at SubjectExecutor.execute (/Users/revone/projects/bunny-rest/src/persistence/SubjectExecutor.ts:137:9)\n    at EntityPersistExecutor.execute (/Users/revone/projects/bunny-rest/src/persistence/EntityPersistExecutor.ts:182:21)'
                }
            })
        } : {})
    });

    const resDataSchema = any().openapi({example: resDataExample || {}});

    return object({
        http: httpSchema,
        bizLogic: bizLogicSchema,
        resData: resDataSchema
    }).openapi(name);
}