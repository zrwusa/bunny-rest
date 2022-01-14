import config from 'config';
import logger from './logger';

import {createConnection} from 'typeorm';
import {User} from '../entities/user-entity';
import {Order} from '../entities/order-entity';
import {Address} from '../entities/address-entity';
import {Product} from '../entities/product-entity';

// todo may need retry connecting
export const postgresConnect = async () => {
    try {
        const url = config.get<string>('POSTGRES_URI');
        await createConnection({
            name: 'postgres_connection',
            type: 'postgres',
            url: url,
            entities: [User, Order, Address, Product],
            synchronize: true,
            logging: ['error', 'warn'],
        });
        logger.info(`Successfully connected to Postgres`);
    } catch (e) {
        logger.error('Could not connect to Postgres');
        logger.error(e);
    }


};


