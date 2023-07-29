import {validateRequest} from '../../middlewares';
import {createPostSchema, deletePostSchema, getPostSchema} from '../../schemas';
import {createPostCtrl, deletePostCtrl, getPostCtrl, getPostsCtrl} from '../../controllers';
import {jwtAuth} from '../../middlewares';
import express from 'express';

const postRouter = express.Router();

postRouter.post('/', [validateRequest(createPostSchema)], createPostCtrl);

postRouter.get('/:id', [validateRequest(getPostSchema)], getPostCtrl);

postRouter.get('/', getPostsCtrl);

postRouter.delete('/:id', [jwtAuth, validateRequest(deletePostSchema)], deletePostCtrl);

export {postRouter};