import {NextFunction, Request, Response} from 'express';
import {createProduct, deleteProduct, findAndUpdateProduct, findProduct,} from '../services/product-service';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import {CreateProductBody} from '../schemas/product-schema';
import {ParamsDictionary} from 'express-serve-static-core';
import {BL} from '../helpers/biz-logics';

export async function createProductCtrl(req: Request<ParamsDictionary, any, CreateProductBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const product = await createProduct(body);
        return wrapSend(res, RESTFul.ok, BL.CREATE_PRODUCT_SUCCESS, product);
    } catch (e) {
        next(e);
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
    } catch (e) {
        next(e);
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
    } catch (e) {
        next(e);
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
    } catch (e) {
        next(e);
    }
}
