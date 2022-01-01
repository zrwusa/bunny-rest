import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

// todo may need retry connecting
async function mongoConnect() {
    const MONGO_DB_URI = config.get<string>('MONGO_DB_URI');

    try {
        await mongoose.connect(MONGO_DB_URI);
        logger.info('Successfully connected to MongoDB');
    } catch (err) {
        logger.error('Could not connect to MongoDB', err);
        // process.exit(1);
    }
}

export default mongoConnect;
