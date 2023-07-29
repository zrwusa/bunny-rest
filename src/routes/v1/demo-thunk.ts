import express from 'express';
import {jwtAuth, validateRequest} from '../../middlewares';
import {
    createDemoThunkSchema,
    deleteDemoThunkSchema,
    getDemoThunkSchema,
    getDemoThunksSchema
} from '../../schemas';
import {
    createDemoThunkCtrl,
    deleteDemoThunkCtrl,
    getDemoThunkCtrl,
    getDemoThunksCtrl
} from '../../controllers';

const demoThunkRouter = express.Router();

demoThunkRouter.post('/', [validateRequest(createDemoThunkSchema)], createDemoThunkCtrl);

demoThunkRouter.get('/', [validateRequest(getDemoThunksSchema)], getDemoThunksCtrl);

demoThunkRouter.get('/:id', [validateRequest(getDemoThunkSchema)], getDemoThunkCtrl);

demoThunkRouter.delete('/:id', [jwtAuth, validateRequest(deleteDemoThunkSchema)], deleteDemoThunkCtrl);

export {demoThunkRouter}