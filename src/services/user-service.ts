import {omit} from 'lodash';
import {AddressEntity, UserEntity} from '../entities';
import bcrypt from 'bcrypt';
import {FindOptionsWhere} from 'typeorm';
import {BizLogicFailed, serviceProfile} from '../helpers';
import {BL, httpStatusMap} from '../constants';

export async function createUser(input: Partial<UserEntity>) {
    const user = await serviceProfile('createUser', async () => await UserEntity.save(UserEntity.create(input)));
    return omit(user, 'password') as UserEntity;
}

export async function findUser(query: FindOptionsWhere<UserEntity>) {
    return await serviceProfile('findUser', async () => await UserEntity.findOneBy(query));
}

export async function deleteUserById(query: Pick<UserEntity, 'id'>) {
    return await serviceProfile('deleteUserById', async () => await UserEntity.delete(query));
}

export async function deleteUserByBody(query: Pick<UserEntity, 'name' | 'email'>) {
    return await serviceProfile('deleteUserByBody', async () => await UserEntity.delete(query));
}

export async function validatePassword({email, password}: Pick<FindOptionsWhere<UserEntity>, 'email' | 'password'>) {

    return await serviceProfile('validatePassword', async () => {
        const user = await UserEntity.findOneBy({email});

        if (!user) return;

        if (typeof password !== 'string') return;

        const isValid = bcrypt.compare(password, user.password).catch(err => false);

        if (!isValid) return;

        return omit(user, 'password') as UserEntity;
    });

}

export async function createUserAddresses(id: string, inputAddresses: []) {

    return await serviceProfile('createUserAddresses', async () => {
        const user = await UserEntity.findOneBy({id: id});
        if (!user) return new BizLogicFailed(httpStatusMap.notFound, BL.NULL_USER);
        else {
            return await AddressEntity.save(AddressEntity.create({
                ...inputAddresses,
                user
            }));
        }
    })
}
