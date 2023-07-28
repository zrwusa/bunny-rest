import config from 'config';
import {DataSource} from 'typeorm';

const url = config.get<string>('MONGO_DB_URI');

export const MongoDS = new DataSource({
    // name: 'mongodb_connection',
    type: 'mongodb',
    url,
    // namingStrategy: new SnakeNamingStrategy(),
    // entities: [User, Order, Address, Product, DemoGraphql, Post],
    // synchronize: true,
    // logging: ['error', 'warn'],
    // subscribers: [],
    // migrations: [],
});
