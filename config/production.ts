const {
    NODE_ENV,
    PORT,
    MONGO_DB_URI,
    SALT_WORK_FACTOR,
    ACCESS_TOKEN_TTL,
    REFRESH_TOKEN_TTL,
    METRICS_PORT,
    REDIS_URI,
    POSTGRES_URI,
    APOLLO_PORT,
    CORS_ORIGINS,
    OPEN_API_URL,
} = process.env;
const rawConfig = {
    NODE_ENV: NODE_ENV || '',
    PORT: parseInt(PORT ? PORT : '80'),
    MONGO_DB_URI: MONGO_DB_URI || '',
    SALT_WORK_FACTOR: parseInt(SALT_WORK_FACTOR || '10'),
    ACCESS_TOKEN_TTL: ACCESS_TOKEN_TTL || '',
    REFRESH_TOKEN_TTL: REFRESH_TOKEN_TTL || '',
    METRICS_PORT: parseInt(METRICS_PORT || '90'),
    REDIS_URI: REDIS_URI || '',
    POSTGRES_URI: POSTGRES_URI || '',
    APOLLO_PORT: parseInt(APOLLO_PORT || '70'),
    CORS_ORIGINS: CORS_ORIGINS?.split(',')  || [],
    OPEN_API_URL: OPEN_API_URL || '',
};
export default rawConfig;
