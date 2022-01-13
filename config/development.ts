const {PORT, MONGO_DB_URI, SALT_WORK_FACTOR, ACCESS_TOKEN_TTL, REFRESH_TOKEN_TTL, METRICS_PORT, REDIS_URI, POSTGRES_URI} = process.env;

// MONGO_DB_URI: MONGO_DB_URI || 'mongodb://localhost:27017/bunny-rest',
// REDIS_URI: REDIS_URI || 'redis://@localhost:6379',

export default {
    PORT:  parseInt(PORT || ''),
    MONGO_DB_URI: MONGO_DB_URI || '',
    SALT_WORK_FACTOR: parseInt(SALT_WORK_FACTOR || ''),
    ACCESS_TOKEN_TTL: ACCESS_TOKEN_TTL || '',
    REFRESH_TOKEN_TTL: REFRESH_TOKEN_TTL || '',
    METRICS_PORT: parseInt(METRICS_PORT || ''),
    REDIS_URI: REDIS_URI || '',
    POSTGRES_URI: POSTGRES_URI || ''
};
