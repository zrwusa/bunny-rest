import {NextFunction, Request, Response} from 'express';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import {ParamsDictionary} from 'express-serve-static-core';
import {
    createDemoThunk,
    deleteDemoThunk,
    findAndUpdateDemoThunk,
    findDemoThunk,
    findDemoThunks
} from '../services/demo-thunk-service';
import {
    CreateDemoThunkBody,
    GetDemoThunkParams,
    GetDemoThunksParams,
    UpdateDemoThunkBody,
    UpdateDemoThunkParams
} from '../schemas/demo-thunk-schema';
import {BL} from '../constants/biz-logics';

export async function getDemoThunksCtrl(req: Request<ParamsDictionary, any, any, GetDemoThunksParams>, res: Response, next: NextFunction) {
    const {from, offset} = req.query;
    try {
        const demoThunks = await findDemoThunks({from: parseInt(from), offset: parseInt(offset)});
        return wrapSend(res, RESTFul.ok, BL.GET_DEMO_THUNKS_SUCCESS, demoThunks);
    } catch (e) {
        next(e);
    }
}

export async function getDemoThunkCtrl(req: Request<ParamsDictionary, any, any, GetDemoThunkParams>, res: Response, next: NextFunction) {
    const {id} = req.query;
    try {
        const demoThunks = await findDemoThunk({id});
        return wrapSend(res, RESTFul.ok, BL.GET_DEMO_THUNKS_SUCCESS, demoThunks);
    } catch (e) {
        next(e);
    }
}

export async function createDemoThunkCtrl(req: Request<ParamsDictionary, any, CreateDemoThunkBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const post = await createDemoThunk(body);
        return wrapSend(res, RESTFul.ok, BL.CREATE_DEMO_THUNK_SUCCESS, post);
    } catch (e) {
        next(e);
    }
}

export async function updateDemoThunkCtrl(req: Request<UpdateDemoThunkParams, any, UpdateDemoThunkBody>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const post = await findDemoThunk({id});

        if (!post) {
            return wrapSend(res, RESTFul.notFound, BL.NULL_DEMO_THUNK);
        }

        const updatedDemoThunk = await findAndUpdateDemoThunk({id}, body);

        return wrapSend(res, RESTFul.ok, BL.UPDATE_DEMO_THUNK_SUCCESS, updatedDemoThunk);
    } catch (e) {
        next(e);
    }

}

export async function deleteDemoThunkCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const post = await findDemoThunk({id});

        if (!post) {
            return wrapSend(res, RESTFul.notFound, BL.NULL_DEMO_THUNK);
        }

        const deletedDemoThunk = await deleteDemoThunk({id});

        return wrapSend(res, RESTFul.ok, BL.DELETE_DEMO_THUNK_SUCCESS, deletedDemoThunk);
    } catch (e) {
        next(e);
    }
}

