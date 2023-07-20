import {NextFunction, Request, Response} from 'express';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import {BL} from '../helpers/biz-logics';
import {BunnyConfig} from '../types/config';
import config from 'config';
import logger from '../helpers/logger';

export async function getPingCtrl(req: Request, res: Response, next: NextFunction) {
    logger.info('yeah it ran');
    wrapSend(res, RESTFul.ok, BL.PONG);
}

export async function getConfigCtrl(req: Request, res: Response, next: NextFunction) {
    const configGot: BunnyConfig = {
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

    for (let key in configGot) {
        if (configGot.hasOwnProperty(key)) {
            if (key === 'CORS_ORIGINS') {
                configGot['CORS_ORIGINS'] = config.get<string[]>(key);
            } else {
                configGot[key as keyof Omit<BunnyConfig, 'CORS_ORIGINS'>] = config.get<string>(key);
            }
        }
    }
    wrapSend(res, RESTFul.ok, BL.GET_CONFIG_SUCCESS, configGot);
}