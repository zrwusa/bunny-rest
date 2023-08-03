import type {PureEntity} from '../types';
import {OrderEntity, ProductEntity} from '../entities';
import {BizLogicFailed, serviceProfile} from '../helpers';
import {BL, httpStatusMap} from '../constants';
import {In} from 'typeorm';

export async function createOrder(input: Partial<OrderEntity>) {
    return await serviceProfile('createOrder', async () => await OrderEntity.save(OrderEntity.create(input)));
}

export async function findOrders() {
    return await serviceProfile('findOrders', async () => await OrderEntity.find());
}

export async function deleteOrder(id: string) {
    return await serviceProfile('deleteOrder', async () => await OrderEntity.delete(id));
}

export async function createOrderProducts(id: string, inputProducts: PureEntity<ProductEntity>[]) {

    const order = await OrderEntity.findOneBy({id: id});

    if (!order) {
        return new BizLogicFailed(httpStatusMap.notFound, BL.ORDER_NOT_EXIST);
    } else {
        return await serviceProfile('createOrderProducts', async () => {
            order.products = await ProductEntity.find({where: {id: In(inputProducts)}});
            return await OrderEntity.save(order);
        });
    }
}


