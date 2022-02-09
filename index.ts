import dotEnvFlow from 'dotenv-flow';

if (process.env.DOCKER_DEV !== 'yes') {
    const result = dotEnvFlow.config();
    if (result.error) {
        console.error(result.error);
    }
}

import './src/app';


