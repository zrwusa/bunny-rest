import config from 'config';

import {DataSource} from 'typeorm';
import {User} from '../entities/user-entity';
import {Order} from '../entities/order-entity';
import {Address} from '../entities/address-entity';
import {Product} from '../entities/product-entity';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import {GraphqlDemo} from '../entities/graphql-demo';
import {Post} from '../entities/post-entity';

const url = config.get<string>('POSTGRES_URI');

export const PgDS = new DataSource({
    type: 'postgres',
    url,
    namingStrategy: new SnakeNamingStrategy(),
    entities: [User, Order, Address, Product, GraphqlDemo, Post],
    synchronize: true,
    logging: ['error', 'warn'],
    subscribers: [],
    migrations: [],
});