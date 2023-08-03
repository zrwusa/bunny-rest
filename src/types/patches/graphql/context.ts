import {DataSource} from 'typeorm';

export type Context = {
    pgConn: DataSource
}