import {Connection} from 'typeorm';

export type Context = {
    pgConn: Connection
}