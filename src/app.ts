import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import config from 'config';
import logger from './utils/logger';
import connect from './utils/connect';
import responseTime from 'response-time';
import {restResponseTimeHistogram, startMetricsServer} from './utils/metrics';
import swaggerDocs from './utils/swagger';
import privateRouter from './routers/private-router';
import errorResponse from './middlewares/error-response';
import publicRouter from './routers/public-router';
import i18n from './helpers/i18n';
import {wrapSend} from './helpers/protocol';
import {notFound} from './utils/rest-maker';

dotenv.config();

const port = config.get<number>('PORT');

const app = express();

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

app.use('/api/private', privateRouter);
app.use('/api/public', publicRouter);

app.all('*', async (req: Request, res: Response, next: NextFunction) => {
    // in an async function we must use next(error) instead of throw syntax
    wrapSend(res, notFound({}));
});

app.use(errorResponse);

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    startMetricsServer();

    swaggerDocs(app, port);
});
