import {NextFunction, Request, Response} from 'express';
import {createUser, deleteUser, findUser} from '../services/user-service';
import {wrapSend} from '../helpers/protocol';
import RESTFul from '../helpers/restful';
import {CreateUserBody, DeleteUserParams} from '../schemas/user-schema';
import {ParamsDictionary} from '../types/express-enhanced';
import {BL} from '../constants/biz-logics';


export async function createUserCtrl(req: Request<ParamsDictionary, any, CreateUserBody>, res: Response, next: NextFunction) {
    const {body} = req;
    try {
        const user = await createUser(body);
        return wrapSend(res, RESTFul.ok, BL.CREATE_USER_SUCCESS, user);
    } catch (e: any) {
        next(e);
    }
}

export async function deleteUserCtrl(req: Request<DeleteUserParams>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const user = await findUser({id});

        if (!user) {
            return wrapSend(res, RESTFul.notFound, BL.NULL_USER);
        }

        const deletedUser = await deleteUser({id});

        return wrapSend(res, RESTFul.ok, BL.DELETE_USER_SUCCESS, deletedUser);
    } catch (e) {
        next(e);
    }

}
