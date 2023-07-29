import type {
    BLAndTransAuth,
    BLAndTransExample,
    BLAndTransOrder,
    BLAndTransPost,
    BLAndTransProduct,
    BLAndTransSystem,
    BLAndTransUser,
    LanguageCode
} from '../../constants';

export type BLCodeAndTrans = {
    key: string,
    code: string,
    en: string,
} & Partial<LanguageCode>;

export type BLAndTrans =
    BLAndTransSystem
    & BLAndTransUser
    & BLAndTransAuth
    & BLAndTransExample
    & BLAndTransProduct
    & BLAndTransOrder
    & BLAndTransPost;

export type BLAndTransKeys = keyof BLAndTrans;