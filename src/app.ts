import express, {NextFunction, Request, Response} from 'express';
import responseTime from 'response-time';
import {restResponseTimeHistogram, startMetricsServer} from './utils/metrics';
import errorResponse from './middlewares/error-response';
import routerV1 from './routes/router-v1';
import i18n from './helpers/i18n';
import {wrapSend} from './helpers/protocol';
import {notFound} from './utils/rest-maker';
import config from 'config';
import logger from './utils/logger';
import mongoConnect from './utils/mongo-connect';
import {redisConnect} from './utils/redis-client';
import swaggerDocs from './utils/swagger';


const app = express();

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

app.all('*', async (req: Request, res: Response, next: NextFunction) => {
    // in an async function we must use next(error) instead of throw syntax
    wrapSend(res, notFound({}));
});

app.use(errorResponse);

const port = config.get<number>('PORT');

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await mongoConnect();

    await redisConnect();

    startMetricsServer();

    swaggerDocs(app, port);
});

export default app;
