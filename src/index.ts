import dotEnvFlow from 'dotenv-flow';
import {extendZodWithOpenApi} from './libs/zod-to-openapi/src';
import {z} from 'zod';
import logger from './helpers/logger';

extendZodWithOpenApi(z); // In order to adopt the best practice of using Zod to directly define OpenAPI schemas and switch to Typescript v4.9.6 from v5.1.6, it is necessary to inject zod-to-openapi at the entry point

if (process.env.DOCKER_DEV !== 'yes') {
    const result = dotEnvFlow.config();
    if (result.error) {
        logger.error(result.error);
    }
}

import './app';


