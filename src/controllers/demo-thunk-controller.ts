import type {NextFunction, Request, Response} from 'express';
import type {ParamsDictionary} from '../types';
import {wrapSend} from '../helpers';

import {createDemoThunk, deleteDemoThunk, findAndUpdateDemoThunk, findDemoThunk, findDemoThunks} from '../services';
import {
    CreateDemoThunkBody,
    GetDemoThunkParams,
    GetDemoThunksParams,
    UpdateDemoThunkBody,
    UpdateDemoThunkParams
} from '../schemas';
import {BL, httpStatusMap} from '../constants';

export async function getDemoThunksCtrl(req: Request<ParamsDictionary, any, any, GetDemoThunksParams>, res: Response, next: NextFunction) {
    const {from, offset} = req.query;
    try {
        const demoThunks = await findDemoThunks({from: parseInt(from), offset: parseInt(offset)});
        return wrapSend(res, httpStatusMap.ok, BL.GET_DEMO_THUNKS_SUCCESS, demoThunks);
    } catch (err) {
        next(err);
    }
}

export async function getDemoThunkCtrl(req: Request<ParamsDictionary, any, any, GetDemoThunkParams>, res: Response, next: NextFunction) {
    const {id} = req.query;
    try {
        const demoThunks = await findDemoThunk({id});
        return wrapSend(res, httpStatusMap.ok, BL.GET_DEMO_THUNKS_SUCCESS, demoThunks);
    } catch (err) {
        next(err);
    }
}

export async function createDemoThunkCtrl(req: Request<ParamsDictionary, any, CreateDemoThunkBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const post = await createDemoThunk(body);
        return wrapSend(res, httpStatusMap.ok, BL.CREATE_DEMO_THUNK_SUCCESS, post);
    } catch (err) {
        next(err);
    }
}

export async function updateDemoThunkCtrl(req: Request<UpdateDemoThunkParams, any, UpdateDemoThunkBody>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const post = await findDemoThunk({id});

        if (!post) {
            return wrapSend(res, httpStatusMap.notFound, BL.NULL_DEMO_THUNK);
        }

        const updatedDemoThunk = await findAndUpdateDemoThunk({id}, body);

        return wrapSend(res, httpStatusMap.ok, BL.UPDATE_DEMO_THUNK_SUCCESS, updatedDemoThunk);
    } catch (err) {
        next(err);
    }

}

export async function deleteDemoThunkCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const post = await findDemoThunk({id});

        if (!post) return wrapSend(res, httpStatusMap.notFound, BL.NULL_DEMO_THUNK);

        const deletedDemoThunk = await deleteDemoThunk({id});

        return wrapSend(res, httpStatusMap.ok, BL.DELETE_DEMO_THUNK_SUCCESS, deletedDemoThunk);
    } catch (err) {
        next(err);
    }
}

