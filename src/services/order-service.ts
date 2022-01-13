import {databaseResponseTimeHistogram} from '../utils/metrics';
import {Order} from '../entities/order-entity';
import {getPgRepo} from '../utils/get-pg-repo';

export async function createOrder(input: Order) {
    const metricsLabels = {
        operation: 'createOrder',
    };

    const orderRepo = getPgRepo(Order);
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


