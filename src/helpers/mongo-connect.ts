import config from 'config';
import {MongoDS} from './mongo-data-source';
import logger from './logger';

export const mongoConnect = async () => {
    try {
        const url = config.get<string>('MONGO_DB_URI');
        await MongoDS.initialize();
        logger.info(`Successfully connected to MongoDB ${url}`);
    } catch (e) {
        logger.error('Could not connect to MongoDB');
        logger.error(e);
    }
}