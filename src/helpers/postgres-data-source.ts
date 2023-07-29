import config from 'config';
import {DataSource} from 'typeorm';
import {
    AddressEntity,
    DemoGraphql,
    DemoThunkEntity,
    OrderEntity,
    PostEntity,
    ProductEntity,
    UserEntity
} from '../entities';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';

const url = config.get<string>('POSTGRES_URI');

export const PgDS = new DataSource({
    type: 'postgres',
    url,
    namingStrategy: new SnakeNamingStrategy(),
    entities: [UserEntity, OrderEntity, AddressEntity, ProductEntity, DemoGraphql, PostEntity, DemoThunkEntity],
    synchronize: true,
    logging: ['error', 'warn'],
    subscribers: [],
    migrations: [],
});