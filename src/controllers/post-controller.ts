import type {NextFunction, Request, Response} from 'express';
import {wrapSend} from '../helpers';
import type {ParamsDictionary} from '../types';
import {createPost, deletePost, findAndUpdatePost, findPost, findPosts} from '../services';
import {CreatePostBody, GetPostParams, GetPostsQuery, UpdatePostBody, UpdatePostParams} from '../schemas';
import {BL, httpStatusMap} from '../constants';

export async function getPostsCtrl(req: Request<ParamsDictionary, any, any, GetPostsQuery>, res: Response, next: NextFunction) {
    const {from, offset} = req.query;
    try {
        const posts = await findPosts({from: parseInt(from), offset: parseInt(offset)});
        return wrapSend(res, httpStatusMap.ok, BL.GET_POSTS_SUCCESS, posts);
    } catch (err) {
        next(err);
    }
}

export async function getPostCtrl(req: Request<ParamsDictionary, any, any, GetPostParams>, res: Response, next: NextFunction) {
    const {id} = req.query;
    try {
        const post = await findPost({id});
        return wrapSend(res, httpStatusMap.ok, BL.GET_POST_SUCCESS, post);
    } catch (err) {
        next(err);
    }
}

export async function createPostCtrl(req: Request<ParamsDictionary, any, CreatePostBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const post = await createPost(body);
        return wrapSend(res, httpStatusMap.ok, BL.CREATE_POST_SUCCESS, post);
    } catch (err) {
        next(err);
    }
}

export async function updatePostCtrl(req: Request<UpdatePostParams, any, UpdatePostBody>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const post = await findPost({id});

        if (!post) {
            return wrapSend(res, httpStatusMap.notFound, BL.NULL_POST);
        }

        const updatedPost = await findAndUpdatePost({id}, body);

        return wrapSend(res, httpStatusMap.ok, BL.UPDATE_POST_SUCCESS, updatedPost);
    } catch (err) {
        next(err);
    }

}

export async function deletePostCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const post = await findPost({id});

        if (!post) {
            return wrapSend(res, httpStatusMap.notFound, BL.NULL_POST);
        }

        const deletedPost = await deletePost({id});

        return wrapSend(res, httpStatusMap.ok, BL.DELETE_POST_SUCCESS, deletedPost);
    } catch (err) {
        next(err);
    }
}

