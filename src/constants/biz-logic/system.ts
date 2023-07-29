import {BLAndTransSystem} from '../../types';
import {E_BL_CATE} from './biz-logic-category';

export const BLSystem: BLAndTransSystem = {
    INTERNAL_SERVER_ERROR: {
        key: 'INTERNAL_SERVER_ERROR',
        code: `${E_BL_CATE.SYSTEM}_0001`,
        en: 'Internal server error',
        zh: '服务器内部错误',
    },
    VALIDATE_REQUEST_FAILED: {
        key: 'VALIDATE_REQUEST_FAILED',
        code: `${E_BL_CATE.SYSTEM}_0002`,
        en: 'Request validated failed',
        zh: '请求验证失败'
    },
    URI_NOT_FOUND: {
        key: 'URI_NOT_FOUND',
        code: `${E_BL_CATE.SYSTEM}_0003`,
        en: 'The resource for this url was not found',
        zh: '这个url未定义资源'
    },
    RESOURCE_NOT_FOUND: {
        key: 'RESOURCE_NOT_FOUND',
        code: `${E_BL_CATE.SYSTEM}_0004`,
        en: 'Resource not found',
        zh: '未找到资源',
        es: 'Recurso no encontrado'
    },
    PING: {
        key: 'PING',
        code: `${E_BL_CATE.SYSTEM}_0005`,
        en: 'PING',
        zh: '请求测试'
    },
    PONG: {
        key: 'PONG',
        code: `${E_BL_CATE.SYSTEM}_0006`,
        en: 'pong',
        zh: '成功',
        es: 'Éxito'
    },
    GET_CONFIG_SUCCESS: {
        key: 'GET_CONFIG_SUCCESS',
        code: `${E_BL_CATE.SYSTEM}_0007`,
        en: 'Get config success',
        zh: '获取配置成功'
    },
}
