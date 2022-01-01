import {createClient} from 'redis';
import config from 'config';
import logger from './logger';

const redisClient = createClient({
    url: config.get<string>('REDIS_URI')
});

redisClient.on('error', (err) => {
    logger.error('Redis Error', err);
});

async function redisConnect() {
    try {
        await redisClient.connect();
        logger.info('Successfully connected to Redis');
    } catch (err) {
        logger.error('Could not connect to Redis', err);
    }
}


export default redisClient;
export {redisClient, redisConnect};
