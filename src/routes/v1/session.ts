import express from 'express';
import {jwtAuth, validateRequest} from '../../middlewares';
import {createSessionSchema} from '../../schemas';
import {createUserSessionCtrl, deleteSessionCtrl, getUserSessionCtrl} from '../../controllers';

const sessionRouter = express.Router();

sessionRouter.post('/', validateRequest(createSessionSchema), createUserSessionCtrl);

sessionRouter.get('/', jwtAuth, getUserSessionCtrl);

sessionRouter.delete('/', jwtAuth, deleteSessionCtrl);

export {sessionRouter};