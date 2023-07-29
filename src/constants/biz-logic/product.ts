import {BLAndTransProduct} from '../../types';
import {E_BL_CATE} from './biz-logic-category';

export const BLProduct: BLAndTransProduct = {
    DELETE_PRODUCT_SUCCESS: {
        key: 'DELETE_PRODUCT_SUCCESS',
        code: `${E_BL_CATE.APP_PRODUCT}_0001`,
        en: 'Delete product success',
        zh: '删除产品成功'
    },
    NULL_PRODUCT: {
        key: 'NULL_PRODUCT',
        code: `${E_BL_CATE.APP_PRODUCT}_0002`,
        en: 'Product not exists',
        zh: '产品不纯在'
    },
    GET_PRODUCT_SUCCESS: {
        key: 'GET_PRODUCT_SUCCESS',
        code: `${E_BL_CATE.APP_PRODUCT}_0003`,
        en: 'Get product success',
        zh: '获取产品成功'
    },
    CREATE_PRODUCT_SUCCESS: {
        key: 'CREATE_PRODUCT_SUCCESS',
        code: `${E_BL_CATE.APP_PRODUCT}_0004`,
        en: 'Create product success',
        zh: '创建产品成功'
    },
    UPDATE_PRODUCT_SUCCESS: {
        key: 'UPDATE_PRODUCT_SUCCESS',
        code: `${E_BL_CATE.APP_PRODUCT}_0005`,
        en: 'Update product success',
        zh: '更新产品成功'
    },
}
