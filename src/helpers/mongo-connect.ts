import config from 'config';
import logger from './logger';
import {createConnection} from 'typeorm';

// todo may need retry connecting
export const mongoConnect = async () => {
    const url = config.get<string>('MONGO_DB_URI');
    try {
        await createConnection({
            name: 'mongodb_connection',
            type: 'mongodb',
            url
        });
        logger.info(`Successfully connected to MongoDB`);
    } catch (e) {
        logger.error('Could not connect to MongoDB');
        logger.error(e);
    }
};
export default mongoConnect;
