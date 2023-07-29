import type {NextFunction, Request, Response} from 'express';
import type {ParamsDictionary} from '../types';

import {createProduct, deleteProduct, findAndUpdateProduct, findProduct,} from '../services';
import {RESTFul, wrapSend} from '../helpers';
import {CreateProductBody} from '../schemas';
import {BL} from '../constants';

export async function createProductCtrl(req: Request<ParamsDictionary, any, CreateProductBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const product = await createProduct(body);
        return wrapSend(res, RESTFul.ok, BL.CREATE_PRODUCT_SUCCESS, product);
    } catch (err) {
        next(err);
    }
}

export async function updateProductCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const product = await findProduct({id});

        if (!product) return wrapSend(res, RESTFul.notFound, BL.NULL_PRODUCT);

        const updatedProduct = await findAndUpdateProduct({id}, body);

        return wrapSend(res, RESTFul.ok, BL.UPDATE_PRODUCT_SUCCESS, updatedProduct);
    } catch (err) {
        next(err);
    }
}

export async function getProductCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const product = await findProduct({id});
        if (!product) {
            return wrapSend(res, RESTFul.notFound, BL.NULL_PRODUCT);
        }
        return wrapSend(res, RESTFul.ok, BL.GET_PRODUCT_SUCCESS, product);
    } catch (err) {
        next(err);
    }
}

export async function deleteProductCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const product = await findProduct({id});

        if (!product) {
            return wrapSend(res, RESTFul.notFound, BL.NULL_PRODUCT);
        }

        const deletedProduct = await deleteProduct({id});

        return wrapSend(res, RESTFul.ok, BL.DELETE_PRODUCT_SUCCESS, deletedProduct);
    } catch (err) {
        next(err);
    }
}
