import {NextFunction, Request, Response} from 'express';
import RESTFul from '../helpers/restful';
import {wrapSend} from '../helpers/protocol';
import {ParamsDictionary} from 'express-serve-static-core';
import {createPost, deletePost, findAndUpdatePost, findPost, findPosts} from '../services/post-service';
import {GetPostsQuery} from '../schemas/posts-schema';
import {CreatePostBody, UpdatePostBody, UpdatePostParams} from '../schemas/post-schema';
import {BL} from '../helpers/biz-logics';

export async function getPostsCtrl(req: Request<ParamsDictionary, any, any, GetPostsQuery>, res: Response, next: NextFunction) {
    const {from, offset} = req.query;
    try {
        const posts = await findPosts({from: parseInt(from), offset: parseInt(offset)});
        return wrapSend(res, RESTFul.ok, BL.GET_POSTS_SUCCESS, posts);
    } catch (e) {
        next(e);
    }
}

export async function createPostCtrl(req: Request<ParamsDictionary, any, CreatePostBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const post = await createPost(body);
        return wrapSend(res, RESTFul.ok, BL.CREATE_POST_SUCCESS, post);
    } catch (e) {
        next(e);
    }
}

export async function updatePostCtrl(req: Request<UpdatePostParams, any, UpdatePostBody>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const post = await findPost({id});

        if (!post) {
            return wrapSend(res, RESTFul.notFound, BL.NULL_POST);
        }

        const updatedPost = await findAndUpdatePost({id}, body);

        return wrapSend(res, RESTFul.ok, BL.UPDATE_POST_SUCCESS, updatedPost);
    } catch (e) {
        next(e);
    }

}

export async function deletePostCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const post = await findPost({id});

        if (!post) {
            return wrapSend(res, RESTFul.notFound, BL.NULL_POST);
        }

        const deletedPost = await deletePost({id});

        return wrapSend(res, RESTFul.ok, BL.DELETE_POST_SUCCESS, deletedPost);
    } catch (e) {
        next(e);
    }
}

