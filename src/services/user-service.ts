import {FilterQuery} from 'mongoose';
import {omit} from 'lodash';
import UserModel, {UserDocument, UserInput} from '../models/user-model';

export async function createUser(input: UserInput) {
    const user = await UserModel.create(input);

    return omit(user.toJSON(), 'password');
}

export interface AuthUserInput {
    email: string;
    password: string;
}

export async function validatePassword({email, password}: AuthUserInput) {
    const user = await UserModel.findOne({email});

    if (!user) {
        return;
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) return;

    return omit(user.toJSON(), 'password') as UserDocument;
}

export async function findUser(query: FilterQuery<UserDocument>) {
    return UserModel.findOne(query).lean();
}
