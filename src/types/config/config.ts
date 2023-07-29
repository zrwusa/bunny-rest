export type EnvVariables = {
    NODE_ENV?: string,
    PORT: string,
    MONGO_DB_URI: string,
    SALT_WORK_FACTOR: string,
    ACCESS_TOKEN_TTL: string,
    REFRESH_TOKEN_TTL: string,
    METRICS_PORT: string,
    REDIS_URI: string,
    POSTGRES_URI: string,
    APOLLO_PORT: string,
    CORS_ORIGINS: string[],
    OPEN_API_URL: string,
}