import dotEnvFlow from 'dotenv-flow';
import './src/app';

if (process.env.DOCKER_DEV !== 'yes') {
    const result = dotEnvFlow.config();
    if (result.error) {
        console.error(result.error);
    }
}

