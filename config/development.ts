const {PORT, MONGO_DB_URI, SALT_WORK_FACTOR, ACCESS_TOKEN_TTL, REFRESH_TOKEN_TTL, METRICS_PORT, REDIS_URI, SESSION_SECRET} = process.env;

// MONGO_DB_URI: MONGO_DB_URI || 'mongodb://localhost:27017/bunny-rest',
// REDIS_URI: REDIS_URI || 'redis://@localhost:6379',

export default {
    PORT:  parseInt(PORT || '8080'),
    MONGO_DB_URI: MONGO_DB_URI || 'mongodb://root_dev:root_dev_password@mongo:27017/bunny-rest?authSource=admin',
    SALT_WORK_FACTOR: parseInt(SALT_WORK_FACTOR || '10'),
    ACCESS_TOKEN_TTL: ACCESS_TOKEN_TTL || '15m',
    REFRESH_TOKEN_TTL: REFRESH_TOKEN_TTL || '1y',
    METRICS_PORT: parseInt(METRICS_PORT || '9090'),
    REDIS_URI: REDIS_URI || 'redis://@redis:6379'
};
