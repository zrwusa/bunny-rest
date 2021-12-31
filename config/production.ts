const {PORT, DB_URI, SALT_WORK_FACTOR, ACCESS_TOKEN_TTL, REFRESH_TOKEN_TTL, METRICS_PORT} = process.env;

export default {
    PORT: parseInt(PORT || '80'),
    DB_URI: DB_URI || 'mongodb://localhost:27017/bunny-rest',
    SALT_WORK_FACTOR: parseInt(SALT_WORK_FACTOR || '10'),
    ACCESS_TOKEN_TTL: ACCESS_TOKEN_TTL || '15m',
    REFRESH_TOKEN_TTL: REFRESH_TOKEN_TTL || '1y',
    METRICS_PORT: parseInt(METRICS_PORT || '91')
};
