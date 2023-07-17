import config from 'config';
import {PgDS} from './postgres-data-source';
import logger from './logger';

export const postgresConnect = async () => {
    try {
        const url = config.get<string>('POSTGRES_URI');
        logger.info(`Postgres connecting, ${url}`);
        await PgDS.initialize();
        logger.info(`Postgres connected!, ${url}`);

    } catch (err) {
        logger.error(`Postgres connecting error: ${err}`);
        logger.error(err);
    }
}