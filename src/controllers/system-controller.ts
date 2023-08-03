import type {Request, Response} from 'express';
import type {EnvVariables} from '../types';

import {wrapSend} from '../helpers';
import {BL, httpStatusMap} from '../constants';
import config from 'config';
import {logger} from '../helpers/logger';

export async function getPingCtrl(req: Request, res: Response) {
    logger.info('yeah it ran');
    wrapSend(res, httpStatusMap.ok, BL.PONG);
}

export async function getConfigCtrl(req: Request, res: Response) {
    const configGot: EnvVariables = {
        NODE_ENV: config.get<string>('NODE_ENV'),
        PORT: '',
        MONGO_DB_URI: '',
        SALT_WORK_FACTOR: '',
        ACCESS_TOKEN_TTL: '',
        REFRESH_TOKEN_TTL: '',
        METRICS_PORT: '',
        REDIS_URI: '',
        POSTGRES_URI: '',
        APOLLO_PORT: '',
        CORS_ORIGINS: [''],
        OPEN_API_URL: ''
    };

    for (const key of Object.keys(configGot)) {
        if (key === 'CORS_ORIGINS') {
            configGot['CORS_ORIGINS'] = config.get<string[]>(key);
        } else {
            configGot[key as keyof Omit<EnvVariables, 'CORS_ORIGINS'>] = config.get<string>(key);
        }
    }
    wrapSend(res, httpStatusMap.ok, BL.GET_CONFIG_SUCCESS, configGot);
}