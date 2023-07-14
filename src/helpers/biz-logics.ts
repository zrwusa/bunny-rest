export type BizLogicKeys =
    'PONG'
    | 'PASSWORD_RESET_SUCCESS'
    | 'PASSWORD_RECOVER_EMAIL_SENT_SUCCESS'
    | 'PASSWORD_RESET_PRE_CHECK_SUCCESS'
    | 'REGISTER_SUCCESS'
    | 'LOGIN_SUCCESS'
    | 'LOGOUT_SUCCESS'
    | 'LOGOUT_FAILED'
    | 'REFRESH_ACCESS_TOKEN_SUCCESS'
    | 'FIND_ONE_USER_SUCCESS'
    | 'FIND_INFLUENCERS_SUCCESS'
    | 'FIND_OLYMPIC_WINNERS_SUCCESS'
    | 'FB_DISCOVERY_FIND_USER_SUCCESS'
    | 'FIND_EMPLOYEES_SUCCESS'
    | 'EXAMPLE_GET'
    | 'EXAMPLE_PUT'
    | 'EXAMPLE_SAGA_GET_ITEMS'
    | 'EXAMPLE_PRIVATE_PUT'
    | 'INAPPROPRIATE_ACCESS_TOKEN'
    | 'ACCESS_TOKEN_EXPIRED'
    | 'ACCESS_TOKEN_MALFORMED'
    | 'ACCESS_TOKEN_NOT_BEFORE'
    | 'ACCESS_TOKEN_VERIFY_UNKNOWN'
    | 'ACCESS_TOKEN_NOT_PROVIDED'
    | 'REISSUE_ACCESS_TOKEN_FAILED'
    | 'INAPPROPRIATE_REFRESH_TOKEN'
    | 'REFRESH_TOKEN_EXPIRED'
    | 'SESSION_NOT_EXIST'
    | 'REFRESH_TOKEN_MALFORMED'
    | 'REFRESH_TOKEN_NOT_BEFORE'
    | 'REFRESH_TOKEN_VERIFY_UNKNOWN'
    | 'AUTH_FORMAT_ERROR_ACCESS_TOKEN'
    | 'UNKNOWN_AUTH_ERROR'
    | 'REFRESH_TOKEN_NOT_PROVIDED'
    | 'CAN_NOT_UPDATE_REFRESH_TOKEN'
    | 'INCORRECT_EMAIL_OR_PASSWORD'
    | 'USER_EXISTS'
    | 'NULL_USER'
    | 'INVALID_PASSWORD_RESET_LINK_OR_EXPIRED'
    | 'INVALID_USERNAME_OR_EMAIL'
    | 'RESOURCE_NOT_FOUND'
    | 'NO_CUR_PRICE'
    | 'PING'
    | 'ORDER_NOT_EXIST'
    | 'URL_NOT_FOUND'
    | 'CREATE_ORDER_SUCCESS'
    | 'INTERNAL_SERVER_ERROR'
    ;
export type Locales = 'en' | 'zh' | 'es' | 'code' | 'key';
export type BizLogic = { [key in Locales]: string };
export type BizLogics = { [key in BizLogicKeys]: BizLogic };
export const BL: BizLogics = {
    PONG: {
        en: 'pong',
        zh: '成功',
        es: 'Éxito',
        code: 'XXX 0001',
        key: 'PONG'
    },
    INTERNAL_SERVER_ERROR: {
        en: 'Internal server error',
        zh: '服务器内部错误',
        es: 'xxx',
        code: 'XXX 000X',
        key: 'INTERNAL_SERVER_ERROR'
    },
    PASSWORD_RESET_SUCCESS: {
        en: 'Password reset successfully',
        zh: '密码重置成功',
        es: 'Contraseña restablecida correctamente',
        code: 'XXX 0002',
        key: 'PASSWORD_RESET_SUCCESS'
    },
    PASSWORD_RECOVER_EMAIL_SENT_SUCCESS: {
        en: 'Email sent successfully',
        zh: '密码重置链接已发送至您的邮箱',
        es: 'El enlace para restablecer la contraseña se ha enviado a su correo electrónico',
        code: 'XXX 0003',
        key: 'PASSWORD_RECOVER_EMAIL_SENT_SUCCESS'
    },
    PASSWORD_RESET_PRE_CHECK_SUCCESS: {
        en: 'Password reset pre-check successfully',
        zh: '密码重置预检测成功',
        es: 'La comprobación previa de restablecimiento de contraseña se realizó correctamente',
        code: 'XXX 0004',
        key: 'PASSWORD_RESET_PRE_CHECK_SUCCESS'
    },
    REGISTER_SUCCESS: {
        en: 'Register success',
        zh: '注册成功',
        es: 'Registrado correctamente',
        code: 'XXX 0005',
        key: 'REGISTER_SUCCESS'
    },
    LOGIN_SUCCESS: {
        en: 'Login success',
        zh: '登录成功',
        es: 'Inicio de sesión exitoso',
        code: 'XXX 0006',
        key: 'LOGIN_SUCCESS'
    },
    LOGOUT_SUCCESS: {
        en: 'Logout success',
        zh: '退出登录成功',
        es: 'xxx',
        code: 'XXX 0007',
        key: 'LOGOUT_SUCCESS'
    },
    LOGOUT_FAILED: {
        en: 'Logout failed',
        zh: '退出登录失败',
        es: 'xxx',
        code: 'XXX 0008',
        key: 'LOGOUT_FAILED'
    },
    REFRESH_ACCESS_TOKEN_SUCCESS: {
        en: 'Refresh access token success',
        zh: '刷新访问秘钥成功',
        es: 'Actualizando la clave de acceso correctamente',
        code: 'XXX 0009',
        key: 'REFRESH_ACCESS_TOKEN_SUCCESS'
    },
    FIND_ONE_USER_SUCCESS: {
        en: 'Find on user success',
        zh: '成功获取用户',
        es: 'Usuario adquirido correctamente',
        code: 'XXX 0010',
        key: 'FIND_ONE_USER_SUCCESS'
    },
    FIND_INFLUENCERS_SUCCESS: {
        en: 'Find influencers success',
        zh: '获取网红列表成功',
        es: 'Obtén la lista de influencers con éxito',
        code: 'XXX 0011',
        key: 'FIND_INFLUENCERS_SUCCESS'
    },
    FIND_OLYMPIC_WINNERS_SUCCESS: {
        en: 'Find olympic winners success',
        zh: '获取奥运会冠军列表成功',
        es: 'Obtuvo con éxito la lista de campeones olímpicos',
        code: 'XXX 0012',
        key: 'FIND_OLYMPIC_WINNERS_SUCCESS'
    },
    FB_DISCOVERY_FIND_USER_SUCCESS: {
        en: 'Facebook discovery find user success',
        zh: '通过脸书获取用户信息成功',
        es: 'Información de usuario obtenida con éxito a través de Facebook',
        code: 'XXX 0013',
        key: 'FB_DISCOVERY_FIND_USER_SUCCESS'
    },
    FIND_EMPLOYEES_SUCCESS: {
        en: 'Find employees success',
        zh: '获取雇员列表成功',
        es: 'Obtener la lista de empleados correctamente',
        code: 'XXX 0014',
        key: 'FIND_EMPLOYEES_SUCCESS'
    },
    EXAMPLE_GET: {
        en: 'Example get success',
        zh: 'GET示例成功',
        es: 'El ejemplo de GET se realizó correctamente',
        code: 'XXX 0015',
        key: 'EXAMPLE_GET'
    },
    EXAMPLE_PUT: {
        en: 'Example put success',
        zh: 'PUT示例成功',
        es: 'El ejemplo de PUT es exitoso',
        code: 'XXX 0016',
        key: 'EXAMPLE_PUT'
    },
    EXAMPLE_SAGA_GET_ITEMS: {
        en: 'Example saga get items success',
        zh: '示例获取SAGA列表成功',
        es: 'Ejemplo de obtener la lista SAGA correctamente',
        code: 'XXX 0017',
        key: 'EXAMPLE_SAGA_GET_ITEMS'
    },
    EXAMPLE_PRIVATE_PUT: {
        en: 'Example private put success',
        zh: '示例私有PUT成功',
        es: 'Ejemplo de PUT privado exitoso',
        code: 'XXX 0018',
        key: 'EXAMPLE_PRIVATE_PUT'
    },
    INAPPROPRIATE_ACCESS_TOKEN: {
        en: 'Inappropriate access token',
        zh: '不恰当的访问秘钥',
        es: 'Clave de acceso incorrecta',
        code: 'XXX 0019',
        key: 'INAPPROPRIATE_ACCESS_TOKEN'
    },
    ACCESS_TOKEN_EXPIRED: {
        en: 'Access token expired',
        zh: '访问秘钥过期',
        es: 'Clave de acceso caducada',
        code: 'XXX 0020',
        key: 'ACCESS_TOKEN_EXPIRED'
    },
    ACCESS_TOKEN_MALFORMED: {
        en: 'Access token malformed',
        zh: '访问秘钥畸形',
        es: 'Clave de acceso con formato incorrecto',
        code: 'XXX 0021',
        key: 'ACCESS_TOKEN_MALFORMED'
    },
    ACCESS_TOKEN_NOT_BEFORE: {
        en: 'Access token not before',
        zh: '访问秘钥NOT_BEFORE',
        es: 'Clave de acceso NOT_BEFORE',
        code: 'XXX 0022',
        key: 'ACCESS_TOKEN_NOT_BEFORE'
    },
    ACCESS_TOKEN_VERIFY_UNKNOWN: {
        en: 'Access token verify unknown',
        zh: '未知的访问秘钥',
        es: 'Clave de acceso desconocida',
        code: 'XXX 0023',
        key: 'ACCESS_TOKEN_VERIFY_UNKNOWN'
    },
    ACCESS_TOKEN_NOT_PROVIDED: {
        en: 'Access token not provided',
        zh: '访问秘钥未提供',
        es: 'No se proporciona la clave de acceso',
        code: 'XXX 0024',
        key: 'ACCESS_TOKEN_NOT_PROVIDED'
    },
    REISSUE_ACCESS_TOKEN_FAILED: {
        en: 'Reissue access token failed',
        zh: '重新颁发访问秘钥失败',
        es: 'xxx',
        code: 'XXX 0025',
        key: 'REISSUE_ACCESS_TOKEN_FAILED'
    },
    INAPPROPRIATE_REFRESH_TOKEN: {
        en: 'Inappropriate refresh token',
        zh: '不恰当的刷新秘钥',
        es: 'Clave de actualización incorrecta',
        code: 'XXX 0026',
        key: 'INAPPROPRIATE_REFRESH_TOKEN'
    },
    REFRESH_TOKEN_EXPIRED: {
        en: 'Refresh token expired',
        zh: '刷新秘钥过期',
        es: 'La clave de actualización caducó',
        code: 'XXX 0027',
        key: 'REFRESH_TOKEN_EXPIRED'
    },
    SESSION_NOT_EXIST: {
        en: 'Session does not exist',
        zh: '回话不存在',
        es: 'xxx',
        code: 'XXX 0028',
        key: 'SESSION_NOT_EXIST'
    },
    REFRESH_TOKEN_MALFORMED: {
        en: 'Refresh token malformed',
        zh: '刷新秘钥畸形',
        es: 'Actualizar clave con formato incorrecto',
        code: 'XXX 0029',
        key: 'REFRESH_TOKEN_MALFORMED'
    },
    REFRESH_TOKEN_NOT_BEFORE: {
        en: 'Refresh token not before',
        zh: '刷新秘钥NOT_BEFORE',
        es: 'Actualizar clave NOT_BEFORE',
        code: 'XXX 0030',
        key: 'REFRESH_TOKEN_NOT_BEFORE'
    },
    REFRESH_TOKEN_VERIFY_UNKNOWN: {
        en: 'Refresh token verify unknown',
        zh: '未知的刷新秘钥',
        es: 'Clave de actualización desconocida',
        code: 'XXX 0031',
        key: 'REFRESH_TOKEN_VERIFY_UNKNOWN'
    },
    AUTH_FORMAT_ERROR_ACCESS_TOKEN: {
        en: 'Auth format error access token',
        zh: 'AUTH_FORMAT_ERROR_ACCESS_TOKEN',
        es: 'AUTH_FORMAT_ERROR_ACCESS_TOKEN',
        code: 'XXX 0032',
        key: 'AUTH_FORMAT_ERROR_ACCESS_TOKEN'
    },
    UNKNOWN_AUTH_ERROR: {
        en: 'Unknown auth error',
        zh: '未知的验证错误',
        es: 'Error de autenticación desconocido',
        code: 'XXX 0033',
        key: 'UNKNOWN_AUTH_ERROR'
    },
    REFRESH_TOKEN_NOT_PROVIDED: {
        en: 'Refresh token not provided',
        zh: '刷新秘钥未提供',
        es: 'No se proporcionó la clave de actualización',
        code: 'XXX 0034',
        key: 'REFRESH_TOKEN_NOT_PROVIDED'
    },
    CAN_NOT_UPDATE_REFRESH_TOKEN: {
        en: 'Can not update refresh token',
        zh: '不能更新刷新秘钥',
        es: 'No se puede actualizar la clave de actualización',
        code: 'XXX 0035',
        key: 'CAN_NOT_UPDATE_REFRESH_TOKEN'
    },
    INCORRECT_EMAIL_OR_PASSWORD: {
        en: 'Incorrect email or password',
        zh: '邮件地址或密码不正确',
        es: 'La dirección de correo electrónico o la contraseña es incorrecta',
        code: 'XXX 0036',
        key: 'INCORRECT_EMAIL_OR_PASSWORD'
    },
    USER_EXISTS: {
        en: 'User exists',
        zh: '用户已存在',
        es: 'El usuario ya existe',
        code: 'XXX 0037',
        key: 'USER_EXISTS'
    },
    NULL_USER: {
        en: 'Null user',
        zh: '空用户',
        es: 'NULL_USER',
        code: 'XXX 0038',
        key: 'NULL_USER'
    },
    INVALID_PASSWORD_RESET_LINK_OR_EXPIRED: {
        en: 'Invalid password reset link or expired,This link is valid for 60 minutes from password reset email be sent.',
        zh: '密码重置链接失效或过期',
        es: 'El enlace de restablecimiento de contraseña no es válido o ha caducado',
        code: 'XXX 0039',
        key: 'INVALID_PASSWORD_RESET_LINK_OR_EXPIRED'
    },
    INVALID_USERNAME_OR_EMAIL: {
        en: 'Invalid username or email',
        zh: '用户或邮件地址无效',
        es: 'Usuario o dirección de correo electrónico no válidos',
        code: 'XXX 0040',
        key: 'INVALID_USERNAME_OR_EMAIL'
    },
    RESOURCE_NOT_FOUND: {
        en: 'Resource not found',
        zh: '未找到资源',
        es: 'Recurso no encontrado',
        code: 'XXX 0041',
        key: 'RESOURCE_NOT_FOUND'
    },
    NO_CUR_PRICE: {
        en: 'No cur price',
        zh: '没有当前价格',
        es: 'Sin precio actual',
        code: 'XXX 0042',
        key: 'NO_CUR_PRICE'
    },
    PING: {
        en: 'PING',
        zh: 'xxx',
        es: 'xxx',
        code: 'XXX 0043',
        key: 'PING'
    },
    ORDER_NOT_EXIST: {
        en: 'Order does not exist',
        zh: '不存在这个订单',
        es: 'xxx',
        code: 'XXX 0044',
        key: 'ORDER_NOT_EXIST'
    },
    URL_NOT_FOUND: {
        en: 'The resource for this Url was not found',
        zh: '这个url未定义资源',
        es: 'xxx',
        code: 'XXX 0045',
        key: 'URL_NOT_FOUND'
    },
    CREATE_ORDER_SUCCESS: {
        en: 'Create order success',
        zh: '新建订单成功',
        es: 'xxx',
        code: 'XXX 0046',
        key: 'CREATE_ORDER_SUCCESS'
    },
}