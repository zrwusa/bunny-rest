import express, {NextFunction, Request, Response} from 'express';
import responseTime from 'response-time';
import {restResponseTimeHistogram} from './utils/metrics';
import privateRouter from './routers/private-router';
import errorResponse from './middlewares/error-response';
import publicRouter from './routers/public-router';
import i18n from './helpers/i18n';
import {wrapSend} from './helpers/protocol';
import {notFound} from './utils/rest-maker';


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


export default app;
