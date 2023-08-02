import type {NextFunction, Request, Response} from 'express';

import {createProduct, deleteProduct, getProduct, getProductList, updateProduct,} from '../services';
import {wrapSend} from '../helpers';
import {
    CreateProductBody,
    DeleteProductParams,
    GetProductListQuery,
    GetProductParams,
    UpdateProductParams,
    UpdateProductReq
} from '../schemas';
import {BL, httpStatusMap} from '../constants';
import {ParamsDictionary} from '../types';

export async function createProductCtrl(req: Request<ParamsDictionary, null, CreateProductBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const product = await createProduct(body);
        return wrapSend(res, httpStatusMap.ok, BL.CREATE_PRODUCT_SUCCESS, product);
    } catch (err) {
        next(err);
    }
}

export async function getProductCtrl(req: Request<GetProductParams>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const product = await getProduct({id});
        if (!product) return wrapSend(res, httpStatusMap.notFound, BL.NULL_PRODUCT);
        return wrapSend(res, httpStatusMap.ok, BL.GET_PRODUCT_SUCCESS, product);
    } catch (err) {
        next(err);
    }
}

export async function getProductListCtrl(req: Request<ParamsDictionary, null, null, GetProductListQuery>, res: Response, next: NextFunction) {
    const {skip, take} = req.query;
    try {
        const products = await getProductList({skip: parseInt(skip), take: parseInt(take)});
        return wrapSend(res, httpStatusMap.ok, BL.GET_PRODUCT_LIST_SUCCESS, products);
    } catch (err) {
        next(err);
    }
}

export async function updateProductCtrl(req: Request<UpdateProductParams, null, UpdateProductReq>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const product = await getProduct({id});
        if (!product) return wrapSend(res, httpStatusMap.notFound, BL.NULL_PRODUCT);
        const updatedProduct = await updateProduct(id, body);
        return wrapSend(res, httpStatusMap.ok, BL.UPDATE_PRODUCT_SUCCESS, updatedProduct);
    } catch (err) {
        next(err);
    }
}

export async function deleteProductCtrl(req: Request<DeleteProductParams>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const product = await getProduct({id});
        if (!product) return wrapSend(res, httpStatusMap.notFound, BL.NULL_PRODUCT);
        const deletedProduct = await deleteProduct({id});
        return wrapSend(res, httpStatusMap.ok, BL.DELETE_PRODUCT_SUCCESS, deletedProduct);
    } catch (err) {
        next(err);
    }
}
