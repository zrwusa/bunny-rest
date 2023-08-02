import {HTTPStatusMap} from './http-status';
import {BLCodeAndTrans} from '../constants';

export enum E_ProtocolSchemaType {
    VALIDATION = 'VALIDATION',
    INTERNAL_ERROR = 'INTERNAL_ERROR',
    DEFAULT = 'DEFAULT',
}

export type MakeProtocolSchemaOptions = {
    httpStatus: keyof HTTPStatusMap,
    bizLogicCodeAndTrans: BLCodeAndTrans,
    protocolSchemaType: E_ProtocolSchemaType,
    resDataExample?: any,
}