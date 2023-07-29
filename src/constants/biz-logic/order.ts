import {BLAndTransOrder} from '../../types';
import {E_BL_CATE} from './biz-logic-category';

export const BLOrder: BLAndTransOrder = {
    ORDER_NOT_EXIST: {
        key: 'ORDER_NOT_EXIST',
        code: `${E_BL_CATE.APP_ORDER}_0001`,
        en: 'Order does not exist',
        zh: '不存在这个订单'
    },
    CREATE_ORDER_SUCCESS: {
        key: 'CREATE_ORDER_SUCCESS',
        code: `${E_BL_CATE.APP_ORDER}_0002`,
        en: 'Create order success',
        zh: '新建订单成功'
    },
    GET_ORDERS_SUCCESS: {
        key: 'GET_ORDERS_SUCCESS',
        code: `${E_BL_CATE.APP_ORDER}_0003`,
        en: 'Get orders success',
        zh: '获取订单列表成功'
    },
    DELETE_ORDER_SUCCESS: {
        key: 'DELETE_ORDER_SUCCESS',
        code: `${E_BL_CATE.APP_ORDER}_0004`,
        en: 'Delete order success',
        zh: '删除订单成功'
    },
    GET_ORDERS_PRODUCTS_ASSOC_SUCCESS: {
        key: 'GET_ORDERS_PRODUCTS_ASSOC_SUCCESS',
        code: `${E_BL_CATE.APP_ORDER}_0005`,
        en: 'Get orders with products success',
        zh: '获取订单产品列表成功'
    },
    ASSOCIATE_ORDER_PRODUCTS_SUCCESS: {
        key: 'ASSOCIATE_ORDER_PRODUCTS_SUCCESS',
        code: `${E_BL_CATE.APP_ORDER}_0006`,
        en: 'Associate order with products success',
        zh: '关联订单产品成功'
    },
}
