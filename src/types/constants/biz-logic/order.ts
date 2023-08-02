import { BLCodeAndTrans } from "./common";

export type BLAndTransOrder = {
    ORDER_NOT_EXIST: BLCodeAndTrans;
    CREATE_ORDER_SUCCESS: BLCodeAndTrans;
    GET_ORDERS_SUCCESS: BLCodeAndTrans;
    DELETE_ORDER_SUCCESS: BLCodeAndTrans;
    GET_ORDERS_PRODUCTS_ASSOC_SUCCESS: BLCodeAndTrans;
    ASSOCIATE_ORDER_PRODUCTS_SUCCESS: BLCodeAndTrans;
};
