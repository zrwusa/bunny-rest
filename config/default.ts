export default {
    PORT: 8080,
    DB_URI: 'mongodb://localhost:27017/bunny-server-ts',
    SALT_WORK_FACTOR: 10,
    ACCESS_TOKEN_TTL: '0.5m',
    REFRESH_TOKEN_TTL: '1y',
    METRICS_PORT: 9100
};
