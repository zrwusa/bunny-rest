import {E_ProtocolSchemaType, MakeProtocolSchemaOptions} from '../types';
import {makeProtocolSchema} from '../schemas/protocol-schema';
import {BLSystem} from '../constants';

export function makeOpenApiContent(name: string, options: MakeProtocolSchemaOptions) {
    const {httpStatus, bizLogicCodeAndTrans, protocolSchemaType, resDataExample} = options;

    return {
        description: bizLogicCodeAndTrans.en,
        content: {
            'application/json': {
                schema: makeProtocolSchema(name, {
                    httpStatus,
                    bizLogicCodeAndTrans,
                    protocolSchemaType,
                    resDataExample,
                }),
            }
        }
    }
}

export const commonOpenApiResponseContent = {
    400: makeOpenApiContent('ValidationFailedProtocol', {
        httpStatus: '400',
        bizLogicCodeAndTrans: BLSystem.VALIDATE_REQUEST_FAILED,
        protocolSchemaType: E_ProtocolSchemaType.VALIDATION
    }),
    500: makeOpenApiContent('InternalServerErrorProtocol', {
        httpStatus: '500',
        bizLogicCodeAndTrans: BLSystem.INTERNAL_SERVER_ERROR,
        protocolSchemaType: E_ProtocolSchemaType.INTERNAL_ERROR,
    })
}