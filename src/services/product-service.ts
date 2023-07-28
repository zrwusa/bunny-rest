import {databaseResponseTimeHistogram} from '../helpers/metrics';
import {ProductEntity} from '../entities/product-entity';
import {PgDS} from '../helpers/postgres-data-source';
import {FindOptionsWhere} from 'typeorm';

export async function createProduct(input: Partial<ProductEntity>) {
    const metricsLabels = {
        operation: 'createProduct',
    };
    const productRepo = PgDS.getRepository(ProductEntity);
    const product = productRepo.create(input);
    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await productRepo.save(product);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findProduct(
    query: Pick<FindOptionsWhere<ProductEntity>, 'id'>
) {
    const metricsLabels = {
        operation: 'findProduct',
    };

    const productRepo = PgDS.getRepository(ProductEntity);

    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await productRepo.findOneBy(query);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findAndUpdateProduct(query: Pick<ProductEntity, 'id'>, update: Partial<ProductEntity>) {
    const productRepo = PgDS.getRepository(ProductEntity);

    return productRepo.save({id: query.id, ...update});
}

export async function deleteProduct(query: Pick<ProductEntity, 'id'>) {
    const productRepo = PgDS.getRepository(ProductEntity);
    return await productRepo.delete(query);
}
