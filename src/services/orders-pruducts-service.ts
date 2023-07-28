import {OrderEntity} from '../entities/order-entity';
import {databaseResponseTimeHistogram} from '../helpers/metrics';
import {PgDS} from '../helpers/postgres-data-source';


export async function findOrdersProducts(query: Partial<{ minPrice: number, maxPrice: number }>) {
    const metricsLabels = {
        operation: 'findOrdersProducts',
    };
    const {minPrice, maxPrice} = query;
    const orderRepo = PgDS.getRepository(OrderEntity);
    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const orders = orderRepo.createQueryBuilder()
            .select('order')
            .from(OrderEntity, 'order')
            .leftJoinAndSelect('order.products', 'products')
            .where('order.price >= :minPrice AND order.price <= :maxPrice', {minPrice, maxPrice})
            .getMany();
        timer({...metricsLabels, success: 'true'});
        return orders;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}


