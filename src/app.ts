import express, {Request, Response} from 'express';
import responseTime from 'response-time';
import {restResponseTimeHistogram, startMetricsServer} from './helpers/metrics';
import errorResponse from './middlewares/error-response';
import routerV1 from './routes/router-v1';
import i18n from './helpers/i18n';
import {wrapSend} from './helpers/protocol';
import RESTFul from './helpers/restful';
import config from 'config';
import logger from './helpers/logger';
import {redisConnect} from './helpers/redis-client';
import {startSwaggerDocs} from './helpers/swagger';
import {startApollo} from './helpers/apollo-server';
import cors from 'cors';
import {postgresConnect} from './helpers/postgres-connect';
import {mongoConnect} from './helpers/mongo-connect';
import {BL} from './helpers/biz-logics';
import type {BLCodeWithTranslation, BizLogicKeys} from './types';
import {writeDocumentation} from './helpers/zod-openapi';

const app = express();

// for Nginx loading balance
app.enable('trust proxy');

// Front-End with proxy without cors, response header looks like:
// {
//     'access-control-allow-origin': 'http://localhost:3000',
//     'connection': 'close',
//     'content-length': '123',
//     'content-type': 'application/json; charset=utf-8',
//     'date': 'Fri, 14 Jul 2023 07:46:37 GMT',
//     'etag': 'W/"7b-uhZvTda99PSqRJbg0msem2TKZok"',
//     'vary': 'Origin',
//     'x-access-token': 'eyJhbGciOiJSUzI1XXXR5cCI6IkpXVCJ9',
//     'x-powered-by': 'Express',
//     'x-refresh-token': 'eyJhbGciOiJSUzIXXXsInR5cCI6IkpXVCJ9'
// }
// Front-End browsers(Axios) with Back-End cors, response header looks like
// {
//     'content-length': '123',
//     'content-type': 'application/json; charset=utf-8',
//     'x-access-token': 'eyJhbGciOiJSUzI1XXXR5cCI6IkpXVCJ9',
//     'x-refresh-token': 'eyJhbGciOiJSUzIXXXsInR5cCI6IkpXVCJ9'
// }
const origins = config.get<string[]>('CORS_ORIGINS');

app.use(cors({
    origin: origins,
    methods: 'GET, POST, CREATE, DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['x-access-token', 'x-refresh-token']
}));

app.use(i18n.init);

// Enhance i18n to read ts file in order to approach best practice
app.use((req, res, next) => {
    res.__ = function (phrase: BizLogicKeys) {
        const locale = req.getLocale() as keyof BLCodeWithTranslation;
        const translation = BL[phrase][locale];
        return translation || phrase;
    };
    next();
});

app.use(express.json());

app.use(
    responseTime((req: Request, res: Response, time: number) => {
        if (req?.route?.path) {
            restResponseTimeHistogram.observe(
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

    await postgresConnect();

    await mongoConnect();

    await redisConnect();

    await startApollo();

    startMetricsServer();

    writeDocumentation();

    startSwaggerDocs(app, port);

    app.all('*', async (req: Request, res: Response) => {
        wrapSend(res, RESTFul.notFound, BL.URL_NOT_FOUND);
    });
});

export default app;