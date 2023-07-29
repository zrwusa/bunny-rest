import {BLAndTransPost} from '../../types';
import {E_BL_CATE} from './biz-logic-category';

export const BLPost: BLAndTransPost = {
    CREATE_POST_SUCCESS: {
        key: 'CREATE_POST_SUCCESS',
        code: `${E_BL_CATE.APP_POST}_0001`,
        en: 'Create post success',
        zh: '创建帖子成功'
    },
    GET_POSTS_SUCCESS: {
        key: 'GET_POSTS_SUCCESS',
        code: `${E_BL_CATE.APP_POST}_0002`,
        en: 'Get posts success',
        zh: '获取帖子列表成功'
    },
    GET_POST_SUCCESS: {
        key: 'GET_POST_SUCCESS',
        code: `${E_BL_CATE.APP_POST}_0003`,
        en: 'Get post success',
        zh: '获取帖子成功'
    },
    NULL_POST: {
        key: 'NULL_POST',
        code: `${E_BL_CATE.APP_POST}_0004`,
        en: 'Post not exists',
        zh: '帖子不存在'
    },
    UPDATE_POST_SUCCESS: {
        key: 'UPDATE_POST_SUCCESS',
        code: `${E_BL_CATE.APP_POST}_0005`,
        en: 'Update post success',
        zh: '更新贴子成功'
    },
    DELETE_POST_SUCCESS: {
        key: 'DELETE_POST_SUCCESS',
        code: `${E_BL_CATE.APP_POST}_0006`,
        en: 'Delete post success',
        zh: '删除贴子成功'
    },
}
