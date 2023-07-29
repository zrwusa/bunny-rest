import {BLAndTransUser} from '../../types';
import {E_BL_CATE} from './biz-logic-category';

export const BLUser: BLAndTransUser = {
    CREATE_USER_SUCCESS: {
        key: 'CREATE_USER_SUCCESS',
        code: `${E_BL_CATE.APP_USER}_0001`,
        en: 'Create user success',
        zh: '创建用户成功'
    },
    REGISTER_SUCCESS: {
        key: 'REGISTER_SUCCESS',
        code: `${E_BL_CATE.APP_USER}_0002`,
        en: 'Register success',
        zh: '注册成功',
        es: 'Registrado correctamente'
    },
    DELETE_USER_SUCCESS: {
        key: 'DELETE_USER_SUCCESS',
        code: `${E_BL_CATE.APP_USER}_0003`,
        en: 'Delete user success',
        zh: '删除用户成功'
    },
    GET_ONE_USER_SUCCESS: {
        key: 'GET_ONE_USER_SUCCESS',
        code: `${E_BL_CATE.APP_USER}_0004`,
        en: 'Get on user success',
        zh: '成功获取用户',
        es: 'Usuario adquirido correctamente'
    },
    USER_EXISTS: {
        key: 'USER_EXISTS',
        code: `${E_BL_CATE.APP_USER}_0005`,
        en: 'User exists',
        zh: '用户已存在',
        es: 'El usuario ya existe'
    },
    NULL_USER: {
        key: 'NULL_USER',
        code: `${E_BL_CATE.APP_USER}_0006`,
        en: 'Null user',
        zh: '空用户',
        es: 'NULL_USER'
    },
    ASSOCIATE_USER_ADDRESSES_SUCCESS: {
        key: 'ASSOCIATE_USER_ADDRESSES_SUCCESS',
        code: `${E_BL_CATE.APP_USER}_0007`,
        en: 'Associate user with addresses success',
        zh: '关联用户地址成功'
    },
    PASSWORD_RESET_SUCCESS: {
        key: 'PASSWORD_RESET_SUCCESS',
        code: `${E_BL_CATE.APP_USER}_0008`,
        en: 'Password reset successfully',
        zh: '密码重置成功',
        es: 'Contraseña restablecida correctamente'
    },
    PASSWORD_RECOVER_EMAIL_SENT_SUCCESS: {
        key: 'PASSWORD_RECOVER_EMAIL_SENT_SUCCESS',
        code: `${E_BL_CATE.APP_USER}_0009`,
        en: 'Email sent successfully',
        zh: '密码重置链接已发送至您的邮箱',
        es: 'El enlace para restablecer la contraseña se ha enviado a su correo electrónico'
    },
    PASSWORD_RESET_PRE_CHECK_SUCCESS: {
        key: 'PASSWORD_RESET_PRE_CHECK_SUCCESS',
        code: `${E_BL_CATE.APP_USER}_0010`,
        en: 'Password reset pre-check successfully',
        zh: '密码重置预检测成功',
        es: 'La comprobación previa de restablecimiento de contraseña se realizó correctamente'
    },
    INVALID_PASSWORD_RESET_LINK_OR_EXPIRED: {
        key: 'INVALID_PASSWORD_RESET_LINK_OR_EXPIRED',
        code: `${E_BL_CATE.APP_USER}_0011`,
        en: 'Invalid password reset link or expired,This link is valid for 60 minutes from password reset email be sent.',
        zh: '密码重置链接失效或过期',
        es: 'El enlace de restablecimiento de contraseña no es válido o ha caducado'
    },
    INVALID_USERNAME_OR_EMAIL: {
        key: 'INVALID_USERNAME_OR_EMAIL',
        code: `${E_BL_CATE.APP_USER}_0012`,
        en: 'Invalid username or email',
        zh: '用户或邮件地址无效',
        es: 'Usuario o dirección de correo electrónico no válidos'
    },
}
