import {createClient} from 'redis';
import config from 'config';
import logger from './logger';

const url = config.get<string>('REDIS_URI');

export const redisClient = createClient({
    url
});

export async function redisConnect() {
    try {
        logger.info(`Redis connecting ${url}`)
        await redisClient.connect();
        logger.info(`Redis connected! ${url}`);
    } catch (err) {
        logger.error(`Redis connecting error ${err}`);
        logger.error(err);
    }
}

export default redisClient;
