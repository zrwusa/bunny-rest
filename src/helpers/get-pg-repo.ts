import {getConnection} from 'typeorm';
import {EntityTarget} from 'typeorm/common/EntityTarget';
import {Repository} from 'typeorm/repository/Repository';

export function getPgRepo<Entity>(target: EntityTarget<Entity>): Repository<Entity> {
    const pgConnection = getConnection('default');
    return pgConnection.getRepository(target);
}
