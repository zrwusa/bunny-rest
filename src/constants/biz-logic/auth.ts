import {BLAndTransAuth, E_BL_CATE} from '../../types';

export const BLAuth: BLAndTransAuth = {
    LOGIN_SUCCESS: {
        key: 'LOGIN_SUCCESS',
        code: `${E_BL_CATE.AUTH}_0001`,
        en: 'Login success',
        zh: '登录成功',
        es: 'Inicio de sesión exitoso'
    },
    LOGOUT_SUCCESS: {
        key: 'LOGOUT_SUCCESS',
        code: `${E_BL_CATE.AUTH}_0002`,
        en: 'Logout success',
        zh: '退出登录成功'
    },
    LOGOUT_FAILED: {
        key: 'LOGOUT_FAILED',
        code: `${E_BL_CATE.AUTH}_0003`,
        en: 'Logout failed',
        zh: '退出登录失败'
    },
    GET_SESSION_SUCCESS: {
        key: 'GET_SESSION_SUCCESS',
        code: `${E_BL_CATE.AUTH}_0004`,
        en: 'Get session success',
        zh: '获取会话成功'
    },
    SESSION_NOT_EXIST: {
        key: 'SESSION_NOT_EXIST',
        code: `${E_BL_CATE.AUTH}_0005`,
        en: 'Session does not exist',
        zh: '回话不存在'
    },
    INCORRECT_EMAIL_OR_PASSWORD: {
        key: 'INCORRECT_EMAIL_OR_PASSWORD',
        code: `${E_BL_CATE.AUTH}_0006`,
        en: 'Incorrect email or password',
        zh: '邮件地址或密码不正确',
        es: 'La dirección de correo electrónico o la contraseña es incorrecta'
    },
    ACCESS_TOKEN_EXPIRED: {
        key: 'ACCESS_TOKEN_EXPIRED',
        code: `${E_BL_CATE.AUTH}_0007`,
        en: 'Access token expired',
        zh: '访问秘钥过期',
        es: 'Clave de acceso caducada'
    },
    ACCESS_TOKEN_MALFORMED: {
        key: 'ACCESS_TOKEN_MALFORMED',
        code: `${E_BL_CATE.AUTH}_0008`,
        en: 'Access token malformed',
        zh: '访问秘钥畸形',
        es: 'Clave de acceso con formato incorrecto'
    },
    ACCESS_TOKEN_NOT_BEFORE: {
        key: 'ACCESS_TOKEN_NOT_BEFORE',
        code: `${E_BL_CATE.AUTH}_0009`,
        en: 'Access token not before',
        zh: '访问秘钥NOT_BEFORE',
        es: 'Clave de acceso NOT_BEFORE'
    },
    ACCESS_TOKEN_VERIFY_UNKNOWN: {
        key: 'ACCESS_TOKEN_VERIFY_UNKNOWN',
        code: `${E_BL_CATE.AUTH}_0010`,
        en: 'Access token verify unknown',
        zh: '未知的访问秘钥',
        es: 'Clave de acceso desconocida'
    },
    ACCESS_TOKEN_NOT_PROVIDED: {
        key: 'ACCESS_TOKEN_NOT_PROVIDED',
        code: `${E_BL_CATE.AUTH}_0011`,
        en: 'Access token not provided',
        zh: '访问秘钥未提供',
        es: 'No se proporciona la clave de acceso'
    },
    REISSUE_ACCESS_TOKEN_FAILED: {
        key: 'REISSUE_ACCESS_TOKEN_FAILED',
        code: `${E_BL_CATE.AUTH}_0012`,
        en: 'Reissue access token failed',
        zh: '重新颁发访问秘钥失败'
    },
    INAPPROPRIATE_REFRESH_TOKEN: {
        key: 'INAPPROPRIATE_REFRESH_TOKEN',
        code: `${E_BL_CATE.AUTH}_0013`,
        en: 'Inappropriate refresh token',
        zh: '不恰当的刷新秘钥',
        es: 'Clave de actualización incorrecta'
    },
    REFRESH_TOKEN_EXPIRED: {
        key: 'REFRESH_TOKEN_EXPIRED',
        code: `${E_BL_CATE.AUTH}_0014`,
        en: 'Refresh token expired',
        zh: '刷新秘钥过期',
        es: 'La clave de actualización caducó'
    },
    REFRESH_ACCESS_TOKEN_SUCCESS: {
        key: 'REFRESH_ACCESS_TOKEN_SUCCESS',
        code: `${E_BL_CATE.AUTH}_0015`,
        en: 'Refresh access token success',
        zh: '刷新访问秘钥成功',
        es: 'Actualizando la clave de acceso correctamente'
    },
    INAPPROPRIATE_ACCESS_TOKEN: {
        key: 'INAPPROPRIATE_ACCESS_TOKEN',
        code: `${E_BL_CATE.AUTH}_0016`,
        en: 'Inappropriate access token',
        zh: '不恰当的访问秘钥',
        es: 'Clave de acceso incorrecta'
    },
    REFRESH_TOKEN_MALFORMED: {
        key: 'REFRESH_TOKEN_MALFORMED',
        code: `${E_BL_CATE.AUTH}_0017`,
        en: 'Refresh token malformed',
        zh: '刷新秘钥畸形',
        es: 'Actualizar clave con formato incorrecto'
    },
    REFRESH_TOKEN_NOT_BEFORE: {
        key: 'REFRESH_TOKEN_NOT_BEFORE',
        code: `${E_BL_CATE.AUTH}_0018`,
        en: 'Refresh token not before',
        zh: '刷新秘钥NOT_BEFORE',
        es: 'Actualizar clave NOT_BEFORE'
    },
    REFRESH_TOKEN_VERIFY_UNKNOWN: {
        key: 'REFRESH_TOKEN_VERIFY_UNKNOWN',
        code: `${E_BL_CATE.AUTH}_0019`,
        en: 'Refresh token verify unknown',
        zh: '未知的刷新秘钥',
        es: 'Clave de actualización desconocida'
    },
    AUTH_FORMAT_ERROR_ACCESS_TOKEN: {
        key: 'AUTH_FORMAT_ERROR_ACCESS_TOKEN',
        code: `${E_BL_CATE.AUTH}_0020`,
        en: 'Auth format error access token',
        zh: '身份验证，访问令牌格式错误',
        es: 'AUTH_FORMAT_ERROR_ACCESS_TOKEN'
    },
    UNKNOWN_AUTH_ERROR: {
        key: 'UNKNOWN_AUTH_ERROR',
        code: `${E_BL_CATE.AUTH}_0021`,
        en: 'Unknown auth error',
        zh: '未知的验证错误',
        es: 'Error de autenticación desconocido'
    },
    REFRESH_TOKEN_NOT_PROVIDED: {
        key: 'REFRESH_TOKEN_NOT_PROVIDED',
        code: `${E_BL_CATE.AUTH}_0022`,
        en: 'Refresh token not provided',
        zh: '刷新秘钥未提供',
        es: 'No se proporcionó la clave de actualización'
    },
    CAN_NOT_UPDATE_REFRESH_TOKEN: {
        key: 'CAN_NOT_UPDATE_REFRESH_TOKEN',
        code: `${E_BL_CATE.AUTH}_0023`,
        en: 'Can not update refresh token',
        zh: '不能更新刷新秘钥',
        es: 'No se puede actualizar la clave de actualización'
    },
}
