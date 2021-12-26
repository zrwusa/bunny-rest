import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import config from 'config';
import logger from './utils/logger';
import connect from './utils/connect';
import responseTime from 'response-time';
import {restResponseTimeHistogram, startMetricsServer} from './utils/metrics';
import swaggerDocs from './utils/swagger';
import privateRouter from './routers/private-router';
import {NotFoundError} from './utils/errors';
import errorResponse from './middlewares/error-response';
import publicRouter from './routers/public-router';

dotenv.config();

const port = config.get<number>('PORT');

const app = express();


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

app.use(privateRouter);
app.use(publicRouter);

app.all('*', async (req: Request, res: Response, next: NextFunction) => {
    // in an async function we must use next(error) instead of throw syntax
    next(new NotFoundError('Not found'));
});

app.use(errorResponse);

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    startMetricsServer();

    swaggerDocs(app, port);
});
