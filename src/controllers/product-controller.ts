import {NextFunction, Request, Response} from 'express';
import {createProduct, deleteProduct, findAndUpdateProduct, findProduct,} from '../services/product-service';
import {notFound, ok} from '../helpers/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {
    CreateProductBody,
    DeleteProductParams,
    GetProductParams,
    UpdateProductBody,
    UpdateProductParams
} from '../schemas/product-schema';
import {ParamsDictionary} from 'express-serve-static-core';

export async function createProductCtrl(req: Request<ParamsDictionary, any, CreateProductBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const product = await createProduct(body);
        return wrapSend(res, ok(), product);
    } catch (e) {
        next(e);
    }
}

export async function updateProductCtrl(req: Request<UpdateProductParams, any, UpdateProductBody>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const product = await findProduct({id});

        if (!product) {
            return wrapSend(res, notFound());
        }

        const updatedProduct = await findAndUpdateProduct({id}, body);

        return wrapSend(res, ok(), updatedProduct);
    } catch (e) {
        next(e);
    }

}

export async function getProductCtrl(req: Request<GetProductParams, any, any>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const product = await findProduct({id});
        if (!product) {
            return wrapSend(res, notFound());
        }
        return wrapSend(res, ok(), product);
    } catch (e) {
        next(e);
    }
}

export async function deleteProductCtrl(req: Request<DeleteProductParams, any, any>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const product = await findProduct({id});

        if (!product) {
            return wrapSend(res, notFound());
        }

        const deletedProduct = await deleteProduct({id});

        return wrapSend(res, ok(), deletedProduct);
    } catch (e) {
        next(e);
    }
}
