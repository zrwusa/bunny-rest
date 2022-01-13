import {NextFunction, Request, Response} from 'express';
import {createUser, deleteUser, findUser} from '../services/user-service';
import {wrapSend} from '../helpers/protocol';
import {notFound, ok} from '../utils/rest-maker';
import {User} from '../entities/user-entity';

export async function createUserHandler(req: Request<{}, {}, User>, res: Response, next: NextFunction) {
    try {
        const user = await createUser(req.body);
        return wrapSend(res, ok(), user);
    } catch (e: any) {
        next(e);
    }
}

export async function deleteUserHandler(req: Request, res: Response, next: NextFunction) {
    const userId = req.params.userId;
    try {
        const user = await findUser({id: userId});

        if (!user) {
            return wrapSend(res, notFound());
        }

        const deletedUser = await deleteUser({id: userId});

        return wrapSend(res, ok(), deletedUser);
    } catch (e) {
        next(e);
    }

}
