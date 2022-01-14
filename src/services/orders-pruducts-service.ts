import {Order} from '../entities/order-entity';
import {getPgRepo} from '../utils/get-pg-repo';
import {databaseResponseTimeHistogram} from '../utils/metrics';


export async function findOrdersProducts(query: Partial<{ minPrice: number, maxPrice: number }>) {
    const metricsLabels = {
        operation: 'findOrdersProducts',
    };
    const {minPrice, maxPrice} = query;
    const orderRepo = getPgRepo(Order);
    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const orders = orderRepo.createQueryBuilder()
            .select('order')
            .from(Order, 'order')
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


