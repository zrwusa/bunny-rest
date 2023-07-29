import type {NextFunction, Request, Response} from 'express';
import type {ParamsDictionary} from '../types';

import {createUser, deleteUserByBody, deleteUserById, findUser} from '../services';
import {RESTFul, wrapSend} from '../helpers';
import {CreateUserBody, DeleteUserBody, DeleteUserParams} from '../schemas';
import {BL} from '../constants';

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

        if (!user) return wrapSend(res, RESTFul.notFound, BL.NULL_USER);

        const deletedUser = await deleteUserById({id});

        return wrapSend(res, RESTFul.ok, BL.DELETE_USER_SUCCESS, deletedUser);
    } catch (err) {
        next(err);
    }
}

export async function deleteUserByBodyCtrl(req: Request<any, any, DeleteUserBody>, res: Response, next: NextFunction) {
    const {body} = req;
    try {
        const user = await findUser(body);

        if (!user) return wrapSend(res, RESTFul.notFound, BL.NULL_USER);

        const deletedUser = await deleteUserByBody(body);

        return wrapSend(res, RESTFul.ok, BL.DELETE_USER_SUCCESS, deletedUser);
    } catch (err) {
        next(err);
    }
}
