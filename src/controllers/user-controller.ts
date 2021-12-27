import {NextFunction, Request, Response} from 'express';
import {createUser} from '../services/user-service';
import {UserInput} from '../models/user-model';

export async function createUserHandler(req: Request<{}, {}, UserInput>, res: Response, next: NextFunction) {
    try {
        const user = await createUser(req.body);
        return res.send(user);
    } catch (e: any) {
        next(e);
    }
}
