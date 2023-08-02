import { LanguageCode } from '../language-codes';
import {BLAndTransSystem} from './system';
import {BLAndTransUser} from './user';
import {BLAndTransAuth} from './auth';
import {BLAndTransExample} from './example';
import {BLAndTransProduct} from './product';
import {BLAndTransOrder} from './order';
import {BLAndTransPost} from './post';

export * from './common';
export * from './auth';
export * from './example';
export * from './order';
export * from './product';
export * from './user';
export * from './post';
export * from './system';


export type BLAndTrans =
    BLAndTransSystem
    & BLAndTransUser
    & BLAndTransAuth
    & BLAndTransExample
    & BLAndTransProduct
    & BLAndTransOrder
    & BLAndTransPost;

export type BLAndTransKeys = keyof BLAndTrans;