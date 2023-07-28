import express from 'express';
import validateRequest from '../../middlewares/validate-request';
import {createUserSchema} from '../../schemas/user-schema';
import {createUserCtrl, deleteUserCtrl} from '../../controllers/user-controller';
import {createUserAddressesSchema} from '../../schemas/user-addresses-schema';
import jwtAuth from '../../middlewares/jwt-auth';
import {createUserAddressesCtrl} from '../../controllers/user-addresses-controller';

const userRouter = express.Router();

userRouter.post('/', validateRequest(createUserSchema), createUserCtrl);

userRouter.delete('/:id', deleteUserCtrl);

userRouter.post('/:id/addresses', [validateRequest(createUserAddressesSchema), jwtAuth], createUserAddressesCtrl);

export {userRouter}