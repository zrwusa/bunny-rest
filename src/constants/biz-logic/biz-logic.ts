import type {BLAndTrans, BLAndTransKeys} from '../../types';
import {BLSystem} from './system';
import {BLUser} from './user';
import {BLAuth} from './auth';
import {BLExample} from './example';
import {BLProduct} from './product';
import {BLOrder} from './order';
import {BLPost} from './post';


export const BL: BLAndTrans = {
    ...BLSystem,
    ...BLUser,
    ...BLAuth,
    ...BLExample,
    ...BLProduct,
    ...BLOrder,
    ...BLPost
}

const set = new Set<string>();


for (let key in BL) {
    if (BL.hasOwnProperty(key)) {
        const {code, key:blKey} = BL[key as BLAndTransKeys];
        if (set.has(code)) throw new Error(`Duplicated code, BizLogic definition error:${code}`)
        if (key !== blKey) throw (new Error(`Duplicated key, BizLogic definition error:${blKey}`))
        set.add(BL[key as BLAndTransKeys].code);
    }
}