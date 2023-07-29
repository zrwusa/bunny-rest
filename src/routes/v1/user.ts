import express from 'express';
import {jwtAuth, validateRequest} from '../../middlewares';
import {createUserAddressesSchema, createUserSchema, deleteUserByBodySchema} from '../../schemas';
import {createUserAddressesCtrl, createUserCtrl, deleteUserByBodyCtrl, deleteUserCtrl} from '../../controllers';

const userRouter = express.Router();

// TODO When it comes to frequent requests, we should reject frequent requests based on the request agent information
userRouter.post('/', validateRequest(createUserSchema), createUserCtrl);

userRouter.delete('/:id', deleteUserCtrl);

userRouter.delete('/', validateRequest(deleteUserByBodySchema), deleteUserByBodyCtrl);

userRouter.post('/:id/addresses', [validateRequest(createUserAddressesSchema), jwtAuth], createUserAddressesCtrl);

export {userRouter}