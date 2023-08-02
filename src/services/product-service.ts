import type {DeepPartial, FindManyOptions, FindOptionsWhere} from 'typeorm';
import {ProductEntity} from '../entities';
import {serviceProfile} from '../helpers';

export async function createProduct(input: DeepPartial<ProductEntity>) {
    const product = ProductEntity.create(input);
    return await serviceProfile('createProduct', async () => await ProductEntity.save(product));
}

export async function getProduct(options: FindOptionsWhere<ProductEntity>) {
    return await serviceProfile('getProduct', async () => await ProductEntity.findOneBy(options));
}

export async function getProductList(options: FindManyOptions<ProductEntity>) {
    return await serviceProfile('getProductList', async () => await ProductEntity.find(options));
}

export async function updateProduct(id: ProductEntity['id'], update: DeepPartial<ProductEntity>) {
    return await serviceProfile('updateProduct', async () => await ProductEntity.update(id, {...update}));
}

export async function deleteProduct(options: Pick<FindOptionsWhere<ProductEntity>, 'id'>) {
    return await serviceProfile('deleteProduct', async () => await ProductEntity.delete(options));
}
