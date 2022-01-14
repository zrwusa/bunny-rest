import {createClient} from 'redis';
import config from 'config';
import logger from './logger';

const url = config.get<string>('REDIS_URI');
export const redisClient = createClient({
    url
});


export async function redisConnect() {
    try {
        await redisClient.connect();
        logger.info(`Successfully connected to Redis`);
    } catch (err) {
        logger.error('Could not connect to Redis');
        logger.error(err);
    }
}


export default redisClient;
