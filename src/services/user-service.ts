import {omit} from 'lodash';
import {User} from '../entities/user-entity';
import bcrypt from 'bcrypt';
import {getPgRepo} from '../helpers/get-pg-repo';

export interface AuthUserInput {
    email: string;
    password: string;
}

export async function createUser(input: Partial<User>) {
    const userRepo = getPgRepo(User);
    const user = await userRepo.save(userRepo.create(input));
    return omit(user, 'password');
}

export async function findUser(query: Partial<User>) {
    const userRepo = getPgRepo(User);
    return userRepo.findOne(query);
}

export async function deleteUser(query: Pick<User, 'id'>) {
    const userRepo = getPgRepo(User);
    return await userRepo.delete(query);

}

export async function validatePassword({email, password}: AuthUserInput) {
    const userRepo = getPgRepo(User);
    const user = await userRepo.findOne({email});

    if (!user) {
        return;
    }

    const isValid = bcrypt.compare(password, user.password).catch(e => false);


    if (!isValid) return;

    return omit(user, 'password') as User;
}

