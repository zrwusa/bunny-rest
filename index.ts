import logger from './src/utils/logger';
import {startMetricsServer} from './src/utils/metrics';
import swaggerDocs from './src/utils/swagger';
import app from './src/app';
import config from 'config';
// import connect from './src/utils/connect';

const port = config.get<number>('PORT');

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    // await connect();

    startMetricsServer();

    swaggerDocs(app, port);
});
