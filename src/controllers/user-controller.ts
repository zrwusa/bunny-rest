import {NextFunction, Request, Response} from 'express';
import {CreateUserInput} from '../schemas/user-schema';
import {createUser} from '../services/user-service';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response, next: NextFunction) {
    try {
        const user = await createUser(req.body);
        return res.send(user);
    } catch (e: any) {
        next(e);
    }
}
