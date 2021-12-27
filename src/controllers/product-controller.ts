import {NextFunction, Request, Response} from 'express';
import {createProduct, deleteProduct, findAndUpdateProduct, findProduct,} from '../services/product-service';
import {NotFoundError} from '../utils/errors';
import {ProductDocument, ProductInput} from '../models/product-model';
import {FilterQuery} from 'mongoose';

export async function createProductHandler(req: Request<{}, {}, ProductInput>, res: Response) {
    const userId = res.locals.user._id;

    const body = req.body;

    const product = await createProduct({...body, user: userId});

    return res.send(product);
}

export async function updateProductHandler(req: Request<FilterQuery<ProductDocument>>, res: Response) {
    const userId = res.locals.user._id;

    const productId = req.params.productId;
    const update = req.body;

    const product = await findProduct({productId});

    if (!product) {
        return res.sendStatus(404);
    }

    if (String(product.user) !== userId) {
        return res.sendStatus(403);
    }

    const updatedProduct = await findAndUpdateProduct({productId}, update, {
        new: true,
    });

    return res.send(updatedProduct);
}

export async function getProductHandler(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.productId;
    const product = await findProduct({productId});

    if (!product) {
        return next(new NotFoundError());
    }

    return res.send(product);
}

export async function deleteProductHandler(req: Request<FilterQuery<ProductDocument>>, res: Response) {
    const userId = res.locals.user._id;
    const productId = req.params.productId;

    const product = await findProduct({productId});

    if (!product) {
        return res.sendStatus(404);
    }

    if (String(product.user) !== userId) {
        return res.sendStatus(403);
    }

    await deleteProduct({productId});

    return res.sendStatus(200);
}
