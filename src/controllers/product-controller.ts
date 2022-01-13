import {NextFunction, Request, Response} from 'express';
import {createProduct, deleteProduct, findAndUpdateProduct, findProduct,} from '../services/product-service';
import {notFound, ok} from '../utils/rest-maker';
import {wrapSend} from '../helpers/protocol';

export async function createProductHandler(req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    try {
        const product = await createProduct(body);
        return wrapSend(res, ok(), product);
    } catch (e) {
        next(e);
    }
}

export async function updateProductHandler(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.productId;
    const update = req.body;

    try {
        const product = await findProduct({id: productId});

        if (!product) {
            return wrapSend(res, notFound());
        }

        const updatedProduct = await findAndUpdateProduct({id: productId}, update);

        return wrapSend(res, ok(), updatedProduct);
    } catch (e) {
        next(e);
    }

}

export async function getProductHandler(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.productId;
    try {
        const product = await findProduct({id: productId});
        if (!product) {
            return wrapSend(res, notFound());
        }
        return wrapSend(res, ok(), product);
    } catch (e) {
        next(e);
    }
}

export async function deleteProductHandler(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.productId;
    try {
        const product = await findProduct({id: productId});

        if (!product) {
            return wrapSend(res, notFound());
        }

        const deletedProduct = await deleteProduct({id: productId});

        return wrapSend(res, ok(), deletedProduct);
    } catch (e) {
        next(e);
    }
}
