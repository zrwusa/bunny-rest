import {NextFunction, Request, Response} from 'express';
import {createUser, deleteUser, findUser} from '../services/user-service';
import {wrapSend} from '../helpers/protocol';
import {notFound, ok} from '../helpers/rest-maker';
import {CreateUserBody, DeleteUserParams} from '../schemas/user-schema';
import {ParamsDictionary} from '../types/express-enhanced';


export async function createUserCtrl(req: Request<ParamsDictionary, any, CreateUserBody>, res: Response, next: NextFunction) {
    const {body} = req;
    try {
        const user = await createUser(body);
        return wrapSend(res, ok(), user);
    } catch (e: any) {
        next(e);
    }
}

export async function deleteUserCtrl(req: Request<DeleteUserParams>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const user = await findUser({id});

        if (!user) {
            return wrapSend(res, notFound());
        }

        const deletedUser = await deleteUser({id});

        return wrapSend(res, ok(), deletedUser);
    } catch (e) {
        next(e);
    }

}
