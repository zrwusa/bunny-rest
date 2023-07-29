import {ProductEntity} from '../entities';
import {FindOptionsWhere} from 'typeorm';
import {serviceProfile} from '../helpers';

export async function createProduct(input: Partial<ProductEntity>) {
    const product = ProductEntity.create(input);
    return await serviceProfile('createProduct', async () => await ProductEntity.save(product));
}

export async function findProduct(query: Pick<FindOptionsWhere<ProductEntity>, 'id'>) {
    return await serviceProfile('findProduct', async () => await ProductEntity.findOneBy(query));
}

export async function findAndUpdateProduct(query: Pick<ProductEntity, 'id'>, update: Partial<ProductEntity>) {
    return await serviceProfile('findAndUpdateProduct', async () => await ProductEntity.save({id: query.id, ...update}));
}

export async function deleteProduct(query: Pick<ProductEntity, 'id'>) {
    return await serviceProfile('deleteProduct', async () => await ProductEntity.delete(query));
}
