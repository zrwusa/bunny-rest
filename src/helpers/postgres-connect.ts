import config from 'config';
import {PgDS} from './postgres-data-source';
import logger from './logger';

export const postgresConnect = async () => {
    try {
        const url = config.get<string>('POSTGRES_URI');
        await PgDS.initialize();
        logger.info(`Successfully connected to Postgres ${url}`);

    } catch (e) {
        logger.error('Could not connect to Postgres');
        logger.error(e);
    }
}