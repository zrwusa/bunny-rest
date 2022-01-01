import dotEnvFlow from 'dotenv-flow';

const result = dotEnvFlow.config();

if (result.error) {
    console.error(result.error);
}

import './src/app';

