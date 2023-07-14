import config from 'config';
import logger from './logger';

import {createConnection} from 'typeorm';
import {User} from '../entities/user-entity';
import {Order} from '../entities/order-entity';
import {Address} from '../entities/address-entity';
import {Product} from '../entities/product-entity';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import {GraphqlDemo} from '../entities/graphql-demo';
import {Post} from '../entities/post-entity';

// todo may need retry connecting
export const postgresConnect = async () => {
    try {
        const url = config.get<string>('POSTGRES_URI');
        const conn = await createConnection({
            type: 'postgres',
            url: url,
            entities: [User, Order, Address, Product, GraphqlDemo, Post],
            synchronize: true,
            logging: ['error', 'warn'],
            namingStrategy: new SnakeNamingStrategy()
        });
        logger.info(`Successfully connected to Postgres ${url}`);
        return conn;
    } catch (e) {
        logger.error('Could not connect to Postgres');
        logger.error(e);
    }


};


