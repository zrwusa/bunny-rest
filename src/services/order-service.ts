import {databaseResponseTimeHistogram} from '../helpers/metrics';
import {OrderEntity} from '../entities/order-entity';
import {PgDS} from '../helpers/postgres-data-source';

export async function createOrder(input: Partial<OrderEntity>) {
    const metricsLabels = {
        operation: 'createOrder',
    };

    const orderRepo = PgDS.getRepository(OrderEntity);
    const order = orderRepo.create(input);

    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await orderRepo.save(order);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}


