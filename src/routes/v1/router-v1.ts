import express from 'express';
import jwtAuth from '../../middlewares/jwt-auth';
import {getConfigCtrl, getPingCtrl} from '../../controllers/service-controller';
import {postRouter} from './post';
import {orderRouter} from './order';
import {userRouter} from './user';
import {demoThunkRouter} from './demo-thunk';
import {sessionRouter} from './session';
import {productRouter} from './product';

const routerV1 = express.Router();

routerV1.get('/ping', getPingCtrl);
routerV1.get('/config', jwtAuth, getConfigCtrl);

routerV1.use('/sessions', sessionRouter);
routerV1.use('/users', userRouter);
routerV1.use('/products', productRouter);
routerV1.use('/posts', postRouter);
routerV1.use('/orders', orderRouter);
routerV1.use('/demo-thunks', demoThunkRouter);

export {routerV1};
