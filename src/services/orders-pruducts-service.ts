import {OrderEntity} from '../entities';
import {serviceProfile} from '../helpers';

export async function findOrdersProductsAssoc(query: Partial<{ minPrice: number, maxPrice: number }>) {
    const {minPrice, maxPrice} = query;
    return await serviceProfile('findOrdersProductsAssoc', async () => await OrderEntity.createQueryBuilder()
        .select('order')
        .from(OrderEntity, 'order')
        .leftJoinAndSelect('order.products', 'products')
        .where('order.price >= :minPrice AND order.price <= :maxPrice', {minPrice, maxPrice})
        .getMany()
    );
}


