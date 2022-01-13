import {databaseResponseTimeHistogram} from '../utils/metrics';
import {Product} from '../entities/product-entity';
import {getPgRepo} from '../utils/get-pg-repo';

export async function createProduct(input: Product) {
    const metricsLabels = {
        operation: 'createProduct',
    };
    const productRepo = getPgRepo(Product);
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
    query: Pick<Product, 'id'>
) {
    const metricsLabels = {
        operation: 'findProduct',
    };

    const productRepo = getPgRepo(Product);

    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await productRepo.findOne(query);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findAndUpdateProduct(
    query: Pick<Product, 'id'>,
    update: Partial<Product>
) {
    const productRepo = getPgRepo(Product);

    return productRepo.save({id: query.id, ...update});
}

export async function deleteProduct(query: Pick<Product, 'id'>) {
    const productRepo = getPgRepo(Product);
    return await productRepo.delete(query);
}
