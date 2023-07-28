import validateRequest from '../../middlewares/validate-request';
import {createPostSchema, deletePostSchema, getPostSchema} from '../../schemas/post-schema';
import {createPostCtrl, deletePostCtrl, getPostCtrl, getPostsCtrl} from '../../controllers/post-controller';
import jwtAuth from '../../middlewares/jwt-auth';
import express from 'express';

const postRouter = express.Router();

postRouter.post('/', [validateRequest(createPostSchema)], createPostCtrl);

postRouter.get('/:id', [validateRequest(getPostSchema)], getPostCtrl);

postRouter.get('/', getPostsCtrl);

postRouter.delete('/:id', [jwtAuth, validateRequest(deletePostSchema)], deletePostCtrl);

export {postRouter} ;