import express from 'express';
import client from 'prom-client';
import {logger} from './logger';
import config from 'config';

const app = express();

export const apiRTHistogram = new client.Histogram({
    name: 'rest_response_time_duration_seconds',
    help: 'REST API response time in seconds',
    labelNames: ['method', 'route', 'status_code'],
});

export const dbRTHistogram = new client.Histogram({
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
        logger.info(`Metrics server started http://localhost:${METRICS_PORT}/metrics`);
    });
}
