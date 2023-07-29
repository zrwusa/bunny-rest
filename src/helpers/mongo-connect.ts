import config from 'config';
import {MongoDS} from './mongo-data-source';
import {logger} from './logger';

export const mongoConnect = async () => {
    try {
        const url = config.get<string>('MONGO_DB_URI');
        logger.info(`MongoDB connecting ${url}`);
        await MongoDS.initialize();
        logger.info(`MongoDB connected! ${url}`);
    } catch (err) {
        logger.error(`MongoDB connecting error: ${err}`);
    }
}