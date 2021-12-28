import {NextFunction, Request, Response} from 'express';
import {createUser, deleteUser, findUser} from '../services/user-service';
import {UserDocument, UserInput} from '../models/user-model';
import {wrapSend} from '../helpers/protocol';
import {notFound, ok} from '../utils/rest-maker';
import {FilterQuery} from 'mongoose';

export async function createUserHandler(req: Request<{}, {}, UserInput>, res: Response, next: NextFunction) {
    try {
        const user = await createUser(req.body);
        return wrapSend(res, ok(), user);
    } catch (e: any) {
        next(e);
    }
}

export async function deleteUserHandler(req: Request<FilterQuery<UserDocument>>, res: Response, next: NextFunction) {
    const userId = req.params.userId;
    try {
        const user = await findUser({userId});

        if (!user) {
            return wrapSend(res, notFound());
        }

        const deletedUser = await deleteUser({userId});

        return wrapSend(res, ok(), deletedUser);
    } catch (e) {
        next(e);
    }

}
