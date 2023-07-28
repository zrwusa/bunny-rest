import config from 'config';
import {DataSource} from 'typeorm';
import {UserEntity} from '../entities/user-entity';
import {OrderEntity} from '../entities/order-entity';
import {AddressEntity} from '../entities/address-entity';
import {ProductEntity} from '../entities/product-entity';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import {DemoGraphql} from '../entities/demo-graphql-entity';
import {PostEntity} from '../entities/post-entity';
import {DemoThunkEntity} from '../entities/demo-thunk-entity';

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