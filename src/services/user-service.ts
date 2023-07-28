import {omit} from 'lodash';
import {UserEntity} from '../entities/user-entity';
import bcrypt from 'bcrypt';
import {FindOptionsWhere} from 'typeorm';
import {PgDS} from '../helpers/postgres-data-source';

export async function createUser(input: Partial<UserEntity>) {
    const userRepo = PgDS.getRepository(UserEntity);
    const user = await userRepo.save(userRepo.create(input));
    return omit(user, 'password');
}

export async function findUser(query: FindOptionsWhere<UserEntity>) {
    const userRepo = PgDS.getRepository(UserEntity);
    return userRepo.findOneBy(query);
}

export async function deleteUser(query: Pick<UserEntity, 'id'>) {
    const userRepo = PgDS.getRepository(UserEntity);
    return await userRepo.delete(query);

}

export async function validatePassword({email, password}: Pick<FindOptionsWhere<UserEntity>, 'email' | 'password'>) {
    const userRepo = PgDS.getRepository(UserEntity);


    const user = await userRepo.findOneBy({email});

    if (!user) return;

    if (typeof password !== 'string') return;

    const isValid = bcrypt.compare(password, user.password).catch(e => false);

    if (!isValid) return;

    return omit(user, 'password') as UserEntity;
}

