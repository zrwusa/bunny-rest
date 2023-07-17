import express from 'express';
import client from 'prom-client';
import log from './logger';
import config from 'config';

const app = express();

export const restResponseTimeHistogram = new client.Histogram({
    name: 'rest_response_time_duration_seconds',
    help: 'REST API response time in seconds',
    labelNames: ['method', 'route', 'status_code'],
});

export const databaseResponseTimeHistogram = new client.Histogram({
    name: 'db_response_time_duration_seconds',
    help: 'Database response time in seconds',
    labelNames: ['operation', 'success'],
});

export function startMetricsServer() {
    const collectDefaultMetrics = client.collectDefaultMetrics;

    collectDefaultMetrics();

    app.get('/metrics', async (req, res) => {
        res.set('Content-Type', client.register.contentType);

        return res.send(await client.register.metrics());
    });

    const METRICS_PORT = config.get<number>('METRICS_PORT');

    app.listen(METRICS_PORT, () => {
        log.info(`Metrics server started at http://localhost:${METRICS_PORT}`);
    });
}
