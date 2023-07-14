import {NextFunction, Request, Response} from 'express';
import RESTFul from '../helpers/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {ParamsDictionary} from 'express-serve-static-core';
import {createPost, deletePost, findAndUpdatePost, findPost, findPosts} from '../services/post-service';
import {GetPostsQuery} from '../schemas/posts-schema';
import {CreatePostBody, DeletePostParams, UpdatePostBody, UpdatePostParams} from '../schemas/post-schema';

// todo can we use Zob schema as the Request type?
export async function getPostsCtrl(req: Request<ParamsDictionary, any, any, GetPostsQuery>, res: Response, next: NextFunction) {
    const {from, offset} = req.query;
    try {
        const posts = await findPosts({from: parseFloat(from), offset: parseFloat(offset)});
        return wrapSend(res, RESTFul.ok(), posts);
    } catch (e) {
        next(e);
    }
}

export async function createPostCtrl(req: Request<ParamsDictionary, any, CreatePostBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const post = await createPost(body);
        return wrapSend(res, RESTFul.ok(), post);
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
            return wrapSend(res, RESTFul.notFound());
        }

        const updatedPost = await findAndUpdatePost({id}, body);

        return wrapSend(res, RESTFul.ok(), updatedPost);
    } catch (e) {
        next(e);
    }

}

export async function deletePostCtrl(req: Request<DeletePostParams, any, any>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const post = await findPost({id});

        if (!post) {
            return wrapSend(res, RESTFul.notFound());
        }

        const deletedPost = await deletePost({id});

        return wrapSend(res, RESTFul.ok(), deletedPost);
    } catch (e) {
        next(e);
    }
}

