import express from 'express';
import validateRequest from '../../middlewares/validate-request';
import {createSessionSchema} from '../../schemas/session-schema';
import {createUserSessionCtrl, deleteSessionCtrl, getUserSessionCtrl} from '../../controllers/session-controller';
import jwtAuth from '../../middlewares/jwt-auth';

const sessionRouter = express.Router();

sessionRouter.post('/', validateRequest(createSessionSchema), createUserSessionCtrl);

sessionRouter.get('/', jwtAuth, getUserSessionCtrl);

sessionRouter.delete('/', jwtAuth, deleteSessionCtrl);

export {sessionRouter};