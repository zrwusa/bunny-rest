import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

// import logger from "./logger";

async function connect() {
    const DB_URI = config.get<string>('DB_URI');

    try {
        await mongoose.connect(DB_URI);
        logger.info('DB connected');
    } catch (error) {
        logger.error('Could not connect to db');
        process.exit(1);
    }
}

export default connect;
