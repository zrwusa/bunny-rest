import {getConnection} from 'typeorm';
import {EntityTarget} from 'typeorm/common/EntityTarget';
import {Repository} from 'typeorm/repository/Repository';

export function getMongoRepo<Entity>(target: EntityTarget<Entity>): Repository<Entity> {
    const pgConnection = getConnection('mongodb_connection');
    return pgConnection.getRepository(target);
}
