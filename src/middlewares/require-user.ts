import type {NextFunction, Request, Response} from 'express';

export const requireUser = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    if (!user) {
        return res.sendStatus(403);
    }

    return next();
};

export default requireUser;
