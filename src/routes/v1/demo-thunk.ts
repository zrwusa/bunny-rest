import express from 'express';
import validateRequest from '../../middlewares/validate-request';
import {
    createDemoThunkSchema,
    deleteDemoThunkSchema,
    getDemoThunkSchema,
    getDemoThunksSchema
} from '../../schemas/demo-thunk-schema';
import {
    createDemoThunkCtrl,
    deleteDemoThunkCtrl,
    getDemoThunkCtrl,
    getDemoThunksCtrl
} from '../../controllers/demo-thunk-controller';
import jwtAuth from '../../middlewares/jwt-auth';

const demoThunkRouter = express.Router();

demoThunkRouter.post('/', [validateRequest(createDemoThunkSchema)], createDemoThunkCtrl);

demoThunkRouter.get('/', [validateRequest(getDemoThunksSchema)], getDemoThunksCtrl);

demoThunkRouter.get('/:id', [validateRequest(getDemoThunkSchema)], getDemoThunkCtrl);

demoThunkRouter.delete('/:id', [jwtAuth, validateRequest(deleteDemoThunkSchema)], deleteDemoThunkCtrl);

export {demoThunkRouter}