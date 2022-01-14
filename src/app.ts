import express, {Request, Response} from 'express';
import responseTime from 'response-time';
import {restResponseTimeHistogram, startMetricsServer} from './helpers/metrics';
import errorResponse from './middlewares/error-response';
import routerV1 from './routes/router-v1';
import i18n from './helpers/i18n';
import {wrapSend} from './helpers/protocol';
import {notFound} from './helpers/rest-maker';
import config from 'config';
import logger from './helpers/logger';
import mongoConnect from './helpers/mongo-connect';
import {redisConnect} from './helpers/redis-client';
import swaggerDocs from './helpers/swagger';
import {postgresConnect} from './helpers/postgres-connect';


const app = express();

// for Nginx loading balance
app.enable('trust proxy');

app.use(i18n.init);

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

    startMetricsServer();

    swaggerDocs(app, port);

    app.all('*', async (req: Request, res: Response) => {
        wrapSend(res, notFound({bizLogicMessage: res.__('URL_NOT_FOUND')}));
    });
});

export default app;
