import type {BLAndTransKeys, BLCodeAndTrans} from './types';
import type {Request, Response} from 'express';
import express from 'express';

import responseTime from 'response-time';
import {
    apiRTHistogram,
    i18n,
    logger,
    mongoConnect,
    postgresConnect,
    redisConnect,
    httpStatusMap,
    startMetricsServer,
    startSwaggerDocs,
    wrapSend,
} from './helpers';
import {errorResponse} from './middlewares';
import {routerV1} from './routes/v1';
import config from 'config';
import cors from 'cors';
import {BL} from './constants';
import {writeDocumentation} from './helpers/zod-openapi';
import {startApollo} from './helpers/apollo-server';

const app = express();

// for Nginx loading balance
app.enable('trust proxy');

const origins = config.get<string[]>('CORS_ORIGINS');

app.use(cors({
    origin: origins,
    methods: 'GET, POST, CREATE, DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Refresh'],
    exposedHeaders: ['x-access-token', 'x-refresh-token']
}));

app.use(i18n.init);

// Enhance i18n to read ts file in order to approach best practice
app.use((req, res, next) => {
    res.__ = function (phrase: BLAndTransKeys) {
        const locale = req.getLocale() as keyof BLCodeAndTrans;
        const translation = BL[phrase][locale];
        return translation || phrase;
    };
    next();
});

app.use(express.json());

app.use(
    responseTime((req: Request, res: Response, time: number) => {
        if (req?.route?.path) {
            apiRTHistogram.observe(
                {
                    method: req.method,
                    route: req.route.path,
                    status_code: res.statusCode,
                },
                time * 1000
            );
        }
    })
);

app.use('/api/v1', routerV1);

app.use(errorResponse);

const port = config.get<number>('PORT');

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    // TODO When the connection lost, we should catch the error, and persistently return the error
    await postgresConnect();

    await mongoConnect();

    await redisConnect();

    await startApollo();

    startMetricsServer();

    writeDocumentation();

    startSwaggerDocs(app, port);

    app.all('*', async (req: Request, res: Response) => {
        wrapSend(res, httpStatusMap.notFound, BL.URI_NOT_FOUND);
    });
});

export default app;