"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { PORT, MONGO_DB_URI, SALT_WORK_FACTOR, ACCESS_TOKEN_TTL, REFRESH_TOKEN_TTL, METRICS_PORT, REDIS_URI, POSTGRES_URI, APOLLO_PORT, CORS_ORIGINS, } = process.env;
exports.default = {
    PORT: parseInt(PORT || ''),
    MONGO_DB_URI: MONGO_DB_URI,
    SALT_WORK_FACTOR: parseInt(SALT_WORK_FACTOR || ''),
    ACCESS_TOKEN_TTL: ACCESS_TOKEN_TTL,
    REFRESH_TOKEN_TTL: REFRESH_TOKEN_TTL,
    METRICS_PORT: parseInt(METRICS_PORT || ''),
    REDIS_URI: REDIS_URI,
    POSTGRES_URI: POSTGRES_URI,
    APOLLO_PORT: APOLLO_PORT || '',
    CORS_ORIGINS: (CORS_ORIGINS === null || CORS_ORIGINS === void 0 ? void 0 : CORS_ORIGINS.split(',')) || [],
};
