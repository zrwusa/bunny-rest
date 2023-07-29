import {BLAndTransExample} from '../../types';
import {E_BL_CATE} from './biz-logic-category';

export const BLExample: BLAndTransExample = {
    EXAMPLE_GET: {
        key: 'EXAMPLE_GET',
        code: `${E_BL_CATE.APP_DEMO}_0001`,
        en: 'Example get success',
        zh: 'GET示例成功',
        es: 'El ejemplo de GET se realizó correctamente'
    },
    EXAMPLE_PUT: {
        key: 'EXAMPLE_PUT',
        code: `${E_BL_CATE.APP_DEMO}_0002`,
        en: 'Example put success',
        zh: 'PUT示例成功',
        es: 'El ejemplo de PUT es exitoso'
    },
    EXAMPLE_SAGA_GET_ITEMS: {
        key: 'EXAMPLE_SAGA_GET_ITEMS',
        code: `${E_BL_CATE.APP_DEMO}_0003`,
        en: 'Example saga get items success',
        zh: '示例获取SAGA列表成功',
        es: 'Ejemplo de obtener la lista SAGA correctamente'
    },
    EXAMPLE_PRIVATE_PUT: {
        key: 'EXAMPLE_PRIVATE_PUT',
        code: `${E_BL_CATE.APP_DEMO}_0004`,
        en: 'Example private put success',
        zh: '示例私有PUT成功',
        es: 'Ejemplo de PUT privado exitoso'
    },
    CREATE_DEMO_THUNK_SUCCESS: {
        key: 'CREATE_DEMO_THUNK_SUCCESS',
        code: `${E_BL_CATE.APP_DEMO}_0005`,
        en: 'Create demo thunk success',
        zh: '创建帖子成功'
    },
    GET_DEMO_THUNKS_SUCCESS: {
        key: 'GET_DEMO_THUNKS_SUCCESS',
        code: `${E_BL_CATE.APP_DEMO}_0006`,
        en: 'Get demo thunks success',
        zh: '获取帖子列表成功'
    },
    NULL_DEMO_THUNK: {
        key: 'NULL_DEMO_THUNK',
        code: `${E_BL_CATE.APP_DEMO}_0007`,
        en: 'Post not exists',
        zh: '帖子不存在'
    },
    UPDATE_DEMO_THUNK_SUCCESS: {
        key: 'UPDATE_DEMO_THUNK_SUCCESS',
        code: `${E_BL_CATE.APP_DEMO}_0008`,
        en: 'Update demo thunk success',
        zh: '更新贴子成功'
    },
    DELETE_DEMO_THUNK_SUCCESS: {
        key: 'DELETE_DEMO_THUNK_SUCCESS',
        code: `${E_BL_CATE.APP_DEMO}_0009`,
        en: 'Delete demo thunk success',
        zh: '删除贴子成功'
    },
    NO_CUR_PRICE: {
        key: 'NO_CUR_PRICE',
        code: `${E_BL_CATE.APP_DEMO}_0010`,
        en: 'No cur price',
        zh: '没有当前价格',
        es: 'Sin precio actual'
    },
    GET_INFLUENCERS_SUCCESS: {
        key: 'GET_INFLUENCERS_SUCCESS',
        code: `${E_BL_CATE.APP_INFLUENCER}_0011`,
        en: 'Get influencers success',
        zh: '获取网红列表成功',
        es: 'Obtén la lista de influencers con éxito'
    },
    GET_OLYMPIC_WINNERS_SUCCESS: {
        key: 'GET_OLYMPIC_WINNERS_SUCCESS',
        code: `${E_BL_CATE.APP_OLYMPIC}_0012`,
        en: 'Get olympic winners success',
        zh: '获取奥运会冠军列表成功',
        es: 'Obtuvo con éxito la lista de campeones olímpicos'
    },
    FB_DISCOVERY_GET_USER_SUCCESS: {
        key: 'FB_DISCOVERY_GET_USER_SUCCESS',
        code: `${E_BL_CATE.APP_FACEBOOK}_0013`,
        en: 'Facebook discovery get user success',
        zh: '通过脸书获取用户信息成功',
        es: 'Información de usuario obtenida con éxito a través de Facebook'
    },
    GET_EMPLOYEES_SUCCESS: {
        key: 'GET_EMPLOYEES_SUCCESS',
        code: `${E_BL_CATE.APP_EMPLOYEE}_0014`,
        en: 'Get employees success',
        zh: '获取雇员列表成功',
        es: 'Obtener la lista de empleados correctamente'
    },
}
