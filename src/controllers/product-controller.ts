import {NextFunction, Request, Response} from 'express';
import {createProduct, deleteProduct, findAndUpdateProduct, findProduct,} from '../services/product-service';
import {forbidden, notFound, ok} from '../utils/rest-maker';
import {ProductDocument, ProductInput} from '../models/product-model';
import {FilterQuery} from 'mongoose';
import {wrapSend} from '../helpers/protocol';

export async function createProductHandler(req: Request<{}, {}, ProductInput>, res: Response, next: NextFunction) {
    const userId = res.locals.user._id;
    const body = req.body;

    try {
        const product = await createProduct({...body, user: userId});
        return wrapSend(res, ok(), product);
    } catch (e) {
        next(e);
    }
}

export async function updateProductHandler(req: Request<FilterQuery<ProductDocument>>, res: Response, next: NextFunction) {
    const userId = res.locals.user._id;

    const productId = req.params.productId;
    const update = req.body;

    try {
        const product = await findProduct({productId});

        if (!product) {
            return wrapSend(res, notFound());
        }

        if (String(product.user) !== userId) {
            return wrapSend(res, forbidden());
        }

        const updatedProduct = await findAndUpdateProduct({productId}, update, {
            new: true,
        });

        return wrapSend(res, ok(), updatedProduct);
    } catch (e) {
        next(e);
    }

}

export async function getProductHandler(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.productId;
    try {
        const product = await findProduct({productId});
        if (!product) {
            return wrapSend(res, notFound());
        }
        return wrapSend(res, ok(), product);
    } catch (e) {
        next(e);
    }
}

export async function deleteProductHandler(req: Request<FilterQuery<ProductDocument>>, res: Response, next: NextFunction) {
    const userId = res.locals.user._id;
    const productId = req.params.productId;

    try {
        const product = await findProduct({productId});

        if (!product) {
            return wrapSend(res, notFound());
        }

        if (String(product.user) !== userId) {
            return wrapSend(res, forbidden());
        }

        const deletedProduct = await deleteProduct({productId});

        return wrapSend(res, ok(), deletedProduct);
    } catch (e) {
        next(e);
    }
}
