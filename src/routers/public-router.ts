import express, {Request, Response} from 'express';
import {createUserHandler} from '../controllers/user-controller';
import validateResource from '../middlewares/validate-schema';
import {createUserSchema} from '../schemas/user-schema';
import {createSessionSchema} from '../schemas/session-schema';
import {createUserSessionHandler} from '../controllers/session-controller';

const publicRouter = express.Router();

/**
 * @openapi
 * /ping:
 *  get:
 *     tags:
 *     - Ping
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
publicRouter.get('/ping', (req: Request, res: Response) => {
    res.status(200).send(res.__('PONG'));
});

/**
 * @openapi
 * '/api/public/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
publicRouter.post('/users', validateResource(createUserSchema), createUserHandler);

/**
 * @openapi
 * '/api/public/sessions':
 *  post:
 *     tags:
 *     - Session
 *     summary: Create a session
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateSessionInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateSessionResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
publicRouter.post('/sessions', validateResource(createSessionSchema), createUserSessionHandler);


export default publicRouter;
