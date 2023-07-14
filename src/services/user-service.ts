import {omit} from 'lodash';
import {User} from '../entities/user-entity';
import bcrypt from 'bcrypt';
import {FindOptionsWhere} from 'typeorm';
import {PgDS} from '../helpers/postgres-data-source';

export async function createUser(input: Partial<User>) {
    const userRepo = PgDS.getRepository(User);
    const user = await userRepo.save(userRepo.create(input));
    return omit(user, 'password');
}

export async function findUser(query: FindOptionsWhere<User>) {
    const userRepo = PgDS.getRepository(User);
    return userRepo.findOneBy(query);
}

export async function deleteUser(query: Pick<User, 'id'>) {
    const userRepo = PgDS.getRepository(User);
    return await userRepo.delete(query);

}

export async function validatePassword({email, password}: Pick<FindOptionsWhere<User>, 'email' | 'password'>) {
    const userRepo = PgDS.getRepository(User);


    const user = await userRepo.findOneBy({email});

    if (!user) return;

    if (typeof password !== 'string') return;

    const isValid = bcrypt.compare(password, user.password).catch(e => false);

    if (!isValid) return;

    return omit(user, 'password') as User;
}

