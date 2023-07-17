import {BizLogicKeys, BizLogicWithTranslation} from '../types/helpers/biz-logic';

export enum BL_CATE {
    SERVICE = 'SERVICE',
    AUTH = 'AUTH',
    APP = 'APP',
    APP_USER = 'APP_USER',
    APP_PRODUCT = 'APP_PRODUCT',
    APP_ORDER = 'APP_ORDER',
    APP_POST = 'APP_POST',
    APP_FACEBOOK = 'APP_FACEBOOK',     // The business lines responsible for integrating with Facebook
    APP_INFLUENCER = 'APP_INFLUENCER', // The business lines responsible for integrating with the influencer system
    APP_OLYMPIC = 'APP_OLYMPIC',       // The business lines responsible for integrating with the Olympic system
    APP_EMPLOYEE = 'APP_EMPLOYEE',     // The business lines responsible for integrating with the employee system
}


export const BL: BizLogicWithTranslation = {
    INTERNAL_SERVER_ERROR: {
        key: 'INTERNAL_SERVER_ERROR',
        code: `${BL_CATE.SERVICE}_0000`,
        en: 'Internal server error',
        zh: '服务器内部错误',
        es: 'xxx'
    },
    PONG: {
        key: 'PONG',
        code: `${BL_CATE.SERVICE}_0001`,
        en: 'pong',
        zh: '成功',
        es: 'Éxito'
    },
    PASSWORD_RESET_SUCCESS: {
        key: 'PASSWORD_RESET_SUCCESS',
        code: `${BL_CATE.APP_USER}_0002`,
        en: 'Password reset successfully',
        zh: '密码重置成功',
        es: 'Contraseña restablecida correctamente'
    },
    PASSWORD_RECOVER_EMAIL_SENT_SUCCESS: {
        key: 'PASSWORD_RECOVER_EMAIL_SENT_SUCCESS',
        code: `${BL_CATE.APP_USER}_0003`,
        en: 'Email sent successfully',
        zh: '密码重置链接已发送至您的邮箱',
        es: 'El enlace para restablecer la contraseña se ha enviado a su correo electrónico'
    },
    PASSWORD_RESET_PRE_CHECK_SUCCESS: {
        key: 'PASSWORD_RESET_PRE_CHECK_SUCCESS',
        code: `${BL_CATE.APP_USER}_0004`,
        en: 'Password reset pre-check successfully',
        zh: '密码重置预检测成功',
        es: 'La comprobación previa de restablecimiento de contraseña se realizó correctamente'
    },
    REGISTER_SUCCESS: {
        key: 'REGISTER_SUCCESS',
        code: `${BL_CATE.APP_USER}_0005`,
        en: 'Register success',
        zh: '注册成功',
        es: 'Registrado correctamente'
    },
    LOGIN_SUCCESS: {
        key: 'LOGIN_SUCCESS',
        code: `${BL_CATE.AUTH}_0006`,
        en: 'Login success',
        zh: '登录成功',
        es: 'Inicio de sesión exitoso'
    },
    LOGOUT_SUCCESS: {
        key: 'LOGOUT_SUCCESS',
        code: `${BL_CATE.AUTH}_0007`,
        en: 'Logout success',
        zh: '退出登录成功',
        es: 'xxx'
    },
    LOGOUT_FAILED: {
        key: 'LOGOUT_FAILED',
        code: `${BL_CATE.AUTH}_0008`,
        en: 'Logout failed',
        zh: '退出登录失败',
        es: 'xxx'
    },
    REFRESH_ACCESS_TOKEN_SUCCESS: {
        key: 'REFRESH_ACCESS_TOKEN_SUCCESS',
        code: `${BL_CATE.AUTH}_0009`,
        en: 'Refresh access token success',
        zh: '刷新访问秘钥成功',
        es: 'Actualizando la clave de acceso correctamente'
    },
    INAPPROPRIATE_ACCESS_TOKEN: {
        key: 'INAPPROPRIATE_ACCESS_TOKEN',
        code: `${BL_CATE.AUTH}_0019`,
        en: 'Inappropriate access token',
        zh: '不恰当的访问秘钥',
        es: 'Clave de acceso incorrecta'
    },
    ACCESS_TOKEN_EXPIRED: {
        key: 'ACCESS_TOKEN_EXPIRED',
        code: `${BL_CATE.AUTH}_0020`,
        en: 'Access token expired',
        zh: '访问秘钥过期',
        es: 'Clave de acceso caducada'
    },
    ACCESS_TOKEN_MALFORMED: {
        key: 'ACCESS_TOKEN_MALFORMED',
        code: `${BL_CATE.AUTH}_0021`,
        en: 'Access token malformed',
        zh: '访问秘钥畸形',
        es: 'Clave de acceso con formato incorrecto'
    },
    ACCESS_TOKEN_NOT_BEFORE: {
        key: 'ACCESS_TOKEN_NOT_BEFORE',
        code: `${BL_CATE.AUTH}_0022`,
        en: 'Access token not before',
        zh: '访问秘钥NOT_BEFORE',
        es: 'Clave de acceso NOT_BEFORE'
    },
    ACCESS_TOKEN_VERIFY_UNKNOWN: {
        key: 'ACCESS_TOKEN_VERIFY_UNKNOWN',
        code: `${BL_CATE.AUTH}_0023`,
        en: 'Access token verify unknown',
        zh: '未知的访问秘钥',
        es: 'Clave de acceso desconocida'
    },
    ACCESS_TOKEN_NOT_PROVIDED: {
        key: 'ACCESS_TOKEN_NOT_PROVIDED',
        code: `${BL_CATE.AUTH}_0024`,
        en: 'Access token not provided',
        zh: '访问秘钥未提供',
        es: 'No se proporciona la clave de acceso'
    },
    REISSUE_ACCESS_TOKEN_FAILED: {
        key: 'REISSUE_ACCESS_TOKEN_FAILED',
        code: `${BL_CATE.AUTH}_0025`,
        en: 'Reissue access token failed',
        zh: '重新颁发访问秘钥失败',
        es: 'xxx'
    },
    INAPPROPRIATE_REFRESH_TOKEN: {
        key: 'INAPPROPRIATE_REFRESH_TOKEN',
        code: `${BL_CATE.AUTH}_0026`,
        en: 'Inappropriate refresh token',
        zh: '不恰当的刷新秘钥',
        es: 'Clave de actualización incorrecta'
    },
    REFRESH_TOKEN_EXPIRED: {
        key: 'REFRESH_TOKEN_EXPIRED',
        code: `${BL_CATE.AUTH}_0027`,
        en: 'Refresh token expired',
        zh: '刷新秘钥过期',
        es: 'La clave de actualización caducó'
    },
    SESSION_NOT_EXIST: {
        key: 'SESSION_NOT_EXIST',
        code: `${BL_CATE.AUTH}_0028`,
        en: 'Session does not exist',
        zh: '回话不存在',
        es: 'xxx'
    },
    REFRESH_TOKEN_MALFORMED: {
        key: 'REFRESH_TOKEN_MALFORMED',
        code: `${BL_CATE.AUTH}_0029`,
        en: 'Refresh token malformed',
        zh: '刷新秘钥畸形',
        es: 'Actualizar clave con formato incorrecto'
    },
    REFRESH_TOKEN_NOT_BEFORE: {
        key: 'REFRESH_TOKEN_NOT_BEFORE',
        code: `${BL_CATE.AUTH}_0030`,
        en: 'Refresh token not before',
        zh: '刷新秘钥NOT_BEFORE',
        es: 'Actualizar clave NOT_BEFORE'
    },
    REFRESH_TOKEN_VERIFY_UNKNOWN: {
        key: 'REFRESH_TOKEN_VERIFY_UNKNOWN',
        code: `${BL_CATE.AUTH}_0031`,
        en: 'Refresh token verify unknown',
        zh: '未知的刷新秘钥',
        es: 'Clave de actualización desconocida'
    },
    AUTH_FORMAT_ERROR_ACCESS_TOKEN: {
        key: 'AUTH_FORMAT_ERROR_ACCESS_TOKEN',
        code: `${BL_CATE.AUTH}_0032`,
        en: 'Auth format error access token',
        zh: '身份验证，访问令牌格式错误',
        es: 'AUTH_FORMAT_ERROR_ACCESS_TOKEN'
    },
    UNKNOWN_AUTH_ERROR: {
        key: 'UNKNOWN_AUTH_ERROR',
        code: `${BL_CATE.AUTH}_0033`,
        en: 'Unknown auth error',
        zh: '未知的验证错误',
        es: 'Error de autenticación desconocido'
    },
    REFRESH_TOKEN_NOT_PROVIDED: {
        key: 'REFRESH_TOKEN_NOT_PROVIDED',
        code: `${BL_CATE.AUTH}_0034`,
        en: 'Refresh token not provided',
        zh: '刷新秘钥未提供',
        es: 'No se proporcionó la clave de actualización'
    },
    CAN_NOT_UPDATE_REFRESH_TOKEN: {
        key: 'CAN_NOT_UPDATE_REFRESH_TOKEN',
        code: `${BL_CATE.AUTH}_0035`,
        en: 'Can not update refresh token',
        zh: '不能更新刷新秘钥',
        es: 'No se puede actualizar la clave de actualización'
    },
    INCORRECT_EMAIL_OR_PASSWORD: {
        key: 'INCORRECT_EMAIL_OR_PASSWORD',
        code: `${BL_CATE.AUTH}_0036`,
        en: 'Incorrect email or password',
        zh: '邮件地址或密码不正确',
        es: 'La dirección de correo electrónico o la contraseña es incorrecta'
    },
    GET_ONE_USER_SUCCESS: {
        key: 'GET_ONE_USER_SUCCESS',
        code: `${BL_CATE.AUTH}_0010`,
        en: 'Get on user success',
        zh: '成功获取用户',
        es: 'Usuario adquirido correctamente'
    },
    GET_INFLUENCERS_SUCCESS: {
        key: 'GET_INFLUENCERS_SUCCESS',
        code: `${BL_CATE.APP_INFLUENCER}_0011`,
        en: 'Get influencers success',
        zh: '获取网红列表成功',
        es: 'Obtén la lista de influencers con éxito'
    },
    GET_OLYMPIC_WINNERS_SUCCESS: {
        key: 'GET_OLYMPIC_WINNERS_SUCCESS',
        code: `${BL_CATE.APP_OLYMPIC}_0012`,
        en: 'Get olympic winners success',
        zh: '获取奥运会冠军列表成功',
        es: 'Obtuvo con éxito la lista de campeones olímpicos'
    },
    FB_DISCOVERY_GET_USER_SUCCESS: {
        key: 'FB_DISCOVERY_GET_USER_SUCCESS',
        code: `${BL_CATE.APP_FACEBOOK}_0013`,
        en: 'Facebook discovery get user success',
        zh: '通过脸书获取用户信息成功',
        es: 'Información de usuario obtenida con éxito a través de Facebook'
    },
    GET_EMPLOYEES_SUCCESS: {
        key: 'GET_EMPLOYEES_SUCCESS',
        code: `${BL_CATE.APP_EMPLOYEE}_0014`,
        en: 'Get employees success',
        zh: '获取雇员列表成功',
        es: 'Obtener la lista de empleados correctamente'
    },
    EXAMPLE_GET: {
        key: 'EXAMPLE_GET',
        code: `${BL_CATE.SERVICE}_0015`,
        en: 'Example get success',
        zh: 'GET示例成功',
        es: 'El ejemplo de GET se realizó correctamente'
    },
    EXAMPLE_PUT: {
        key: 'EXAMPLE_PUT',
        code: `${BL_CATE.SERVICE}_0016`,
        en: 'Example put success',
        zh: 'PUT示例成功',
        es: 'El ejemplo de PUT es exitoso'
    },
    EXAMPLE_SAGA_GET_ITEMS: {
        key: 'EXAMPLE_SAGA_GET_ITEMS',
        code: `${BL_CATE.SERVICE}_0017`,
        en: 'Example saga get items success',
        zh: '示例获取SAGA列表成功',
        es: 'Ejemplo de obtener la lista SAGA correctamente'
    },
    EXAMPLE_PRIVATE_PUT: {
        key: 'EXAMPLE_PRIVATE_PUT',
        code: `${BL_CATE.SERVICE}_0018`,
        en: 'Example private put success',
        zh: '示例私有PUT成功',
        es: 'Ejemplo de PUT privado exitoso'
    },
    USER_EXISTS: {
        key: 'USER_EXISTS',
        code: `${BL_CATE.APP_USER}_0037`,
        en: 'User exists',
        zh: '用户已存在',
        es: 'El usuario ya existe'
    },
    NULL_USER: {
        key: 'NULL_USER',
        code: `${BL_CATE.APP_USER}_0038`,
        en: 'Null user',
        zh: '空用户',
        es: 'NULL_USER'
    },
    INVALID_PASSWORD_RESET_LINK_OR_EXPIRED: {
        key: 'INVALID_PASSWORD_RESET_LINK_OR_EXPIRED',
        code: `${BL_CATE.APP_USER}_0039`,
        en: 'Invalid password reset link or expired,This link is valid for 60 minutes from password reset email be sent.',
        zh: '密码重置链接失效或过期',
        es: 'El enlace de restablecimiento de contraseña no es válido o ha caducado'
    },
    INVALID_USERNAME_OR_EMAIL: {
        key: 'INVALID_USERNAME_OR_EMAIL',
        code: `${BL_CATE.APP_USER}_0040`,
        en: 'Invalid username or email',
        zh: '用户或邮件地址无效',
        es: 'Usuario o dirección de correo electrónico no válidos'
    },
    RESOURCE_NOT_FOUND: {
        key: 'RESOURCE_NOT_FOUND',
        code: `${BL_CATE.APP}_0041`,
        en: 'Resource not found',
        zh: '未找到资源',
        es: 'Recurso no encontrado'
    },
    NO_CUR_PRICE: {
        key: 'NO_CUR_PRICE',
        code: `${BL_CATE.APP_PRODUCT}_0042`,
        en: 'No cur price',
        zh: '没有当前价格',
        es: 'Sin precio actual'
    },
    PING: {
        key: 'PING',
        code: `${BL_CATE.SERVICE}_0043`,
        en: 'PING',
        zh: 'xxx',
        es: 'xxx'
    },
    ORDER_NOT_EXIST: {
        key: 'ORDER_NOT_EXIST',
        code: `${BL_CATE.APP_ORDER}_0044`,
        en: 'Order does not exist',
        zh: '不存在这个订单',
        es: 'xxx'
    },
    URL_NOT_FOUND: {
        key: 'URL_NOT_FOUND',
        code: `${BL_CATE.SERVICE}_0045`,
        en: 'The resource for this Url was not found',
        zh: '这个url未定义资源',
        es: 'xxx'
    },
    CREATE_ORDER_SUCCESS: {
        key: 'CREATE_ORDER_SUCCESS',
        code: `${BL_CATE.APP_ORDER}_0046`,
        en: 'Create order success',
        zh: '新建订单成功',
        es: 'xxx'
    },
    DELETE_USER_SUCCESS: {
        key: 'DELETE_USER_SUCCESS',
        code: `${BL_CATE.APP_USER}_0047`,
        en: 'Delete user success',
        zh: '删除用户成功',
        es: 'xxx'
    },
    CREATE_USER_SUCCESS: {
        key: 'CREATE_USER_SUCCESS',
        code: `${BL_CATE.APP_USER}_0048`,
        en: 'Create user success',
        zh: '创建用户成功',
        es: 'xxx'
    },
    VALIDATE_REQUEST_FAILED: {
        key: 'VALIDATE_REQUEST_FAILED',
        code: `${BL_CATE.AUTH}_0049`,
        en: 'Request validated failed',
        zh: '请求验证失败',
        es: 'xxx'
    },
    GET_SESSION_SUCCESS: {
        key: 'GET_SESSION_SUCCESS',
        code: `${BL_CATE.AUTH}_0050`,
        en: 'Get session success',
        zh: '获取会话成功',
        es: 'xxx'
    },
    DELETE_PRODUCT_SUCCESS: {
        key: 'DELETE_PRODUCT_SUCCESS',
        code: `${BL_CATE.APP_PRODUCT}_0052`,
        en: 'Delete product success',
        zh: '删除产品成功',
        es: 'xxx'
    },
    NULL_PRODUCT: {
        key: 'NULL_PRODUCT',
        code: `${BL_CATE.APP_PRODUCT}_0053`,
        en: 'Product not exists',
        zh: '产品不纯在',
        es: 'xxx'
    },
    GET_PRODUCT_SUCCESS: {
        key: 'GET_PRODUCT_SUCCESS',
        code: `${BL_CATE.APP_PRODUCT}_0054`,
        en: 'Get product success',
        zh: '获取产品成功',
        es: 'xxx'
    },
    CREATE_PRODUCT_SUCCESS: {
        key: 'CREATE_PRODUCT_SUCCESS',
        code: `${BL_CATE.APP_PRODUCT}_0055`,
        en: 'Create product success',
        zh: '创建产品成功',
        es: 'xxx'
    },
    UPDATE_PRODUCT_SUCCESS: {
        key: 'UPDATE_PRODUCT_SUCCESS',
        code: `${BL_CATE.APP_PRODUCT}_0056`,
        en: 'Update product success',
        zh: '更新产品成功',
        es: 'xxx'
    },
    GET_ORDERS_SUCCESS: {
        key: 'GET_ORDERS_SUCCESS',
        code: `${BL_CATE.APP_ORDER}_0057`,
        en: 'Get orders success',
        zh: '获取订单列表成功',
        es: 'xxx'
    },
    DELETE_ORDER_SUCCESS: {
        key: 'DELETE_ORDER_SUCCESS',
        code: `${BL_CATE.APP_ORDER}_0058`,
        en: 'Delete order success',
        zh: '删除订单成功',
        es: 'xxx'
    },
    GET_ORDERS_PRODUCTS_SUCCESS: {
        key: 'GET_ORDERS_PRODUCTS_SUCCESS',
        code: `${BL_CATE.APP_ORDER}_0059`,
        en: 'Get orders with products success',
        zh: '获取订单产品列表成功',
        es: 'xxx'
    },
    ASSOCIATE_ORDER_PRODUCTS_SUCCESS: {
        key: 'ASSOCIATE_ORDER_PRODUCTS_SUCCESS',
        code: `${BL_CATE.APP_ORDER}_0060`,
        en: 'Associate order with products success',
        zh: '关联订单产品成功',
        es: 'xxx'
    },
    ASSOCIATE_USER_ADDRESSES_SUCCESS: {
        key: 'ASSOCIATE_USER_ADDRESSES_SUCCESS',
        code: `${BL_CATE.APP_USER}_0061`,
        en: 'Associate user with addresses success',
        zh: '关联用户地址成功',
        es: 'xxx'
    },
    CREATE_POST_SUCCESS: {
        key: 'CREATE_POST_SUCCESS',
        code: `${BL_CATE.APP_POST}_0062`,
        en: 'Create post success',
        zh: '创建帖子成功',
        es: 'xxx'
    },
    GET_POSTS_SUCCESS: {
        key: 'GET_POSTS_SUCCESS',
        code: `${BL_CATE.APP_POST}_0063`,
        en: 'Get posts success',
        zh: '获取帖子列表成功',
        es: 'xxx'
    },
    NULL_POST: {
        key: 'NULL_POST',
        code: `${BL_CATE.APP_POST}_0064`,
        en: 'Post not exists',
        zh: '帖子不存在',
        es: 'xxx'
    },
    UPDATE_POST_SUCCESS: {
        key: 'UPDATE_POST_SUCCESS',
        code: `${BL_CATE.APP_POST}_0065`,
        en: 'Update post success',
        zh: '更新贴子成功',
        es: 'xxx'
    },
    DELETE_POST_SUCCESS: {
        key: 'DELETE_POST_SUCCESS',
        code: `${BL_CATE.APP_POST}_0066`,
        en: 'Delete post success',
        zh: '删除贴子成功',
        es: 'xxx'
    }
}

const set = new Set<string>();
for (let key in BL) {
    if (BL.hasOwnProperty(key)) {
        if (set.has(BL[key as BizLogicKeys].code)) throw new Error('Duplicated code, BizLogic definition error')
        if (key !== BL[key as BizLogicKeys].key) throw (new Error('Duplicated key, BizLogic definition error'))
        set.add(BL[key as BizLogicKeys].code);
    }
}