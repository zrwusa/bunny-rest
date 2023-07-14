import {databaseResponseTimeHistogram} from '../helpers/metrics';
import {Product} from '../entities/product-entity';
import {PgDS} from '../helpers/postgres-data-source';
import {FindOptionsWhere} from 'typeorm';

export async function createProduct(input: Partial<Product>) {
    const metricsLabels = {
        operation: 'createProduct',
    };
    const productRepo = PgDS.getRepository(Product);
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
    query: Pick<FindOptionsWhere<Product>, 'id'>
) {
    const metricsLabels = {
        operation: 'findProduct',
    };

    const productRepo = PgDS.getRepository(Product);

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

export async function findAndUpdateProduct(query: Pick<Product, 'id'>, update: Partial<Product>) {
    const productRepo = PgDS.getRepository(Product);

    return productRepo.save({id: query.id, ...update});
}

export async function deleteProduct(query: Pick<Product, 'id'>) {
    const productRepo = PgDS.getRepository(Product);
    return await productRepo.delete(query);
}
