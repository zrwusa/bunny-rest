import {LanguageCode} from '../language-codes';


export type BLCodeAndTrans = {
    key: string,
    code: string,
    en: string,
} & Partial<LanguageCode>;

export enum E_BL_CATE {
    SYSTEM = 'SYSTEM',

    AUTH = 'AUTH',

    APP = 'APP',
    APP_DEMO = 'APP_DEMO',
    APP_USER = 'APP_USER',
    APP_PRODUCT = 'APP_PRODUCT',
    APP_ORDER = 'APP_ORDER',
    APP_POST = 'APP_POST',

    APP_FACEBOOK = 'APP_FACEBOOK',     // The business lines responsible for integrating with Facebook
    APP_INFLUENCER = 'APP_INFLUENCER', // The business lines responsible for integrating with the influencer system
    APP_OLYMPIC = 'APP_OLYMPIC',       // The business lines responsible for integrating with the Olympic system
    APP_EMPLOYEE = 'APP_EMPLOYEE',     // The business lines responsible for integrating with the employee system
}