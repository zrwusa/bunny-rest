import {NextFunction, Request, Response} from 'express';
import {createUser, deleteUser, findUser} from '../services/user-service';
import {wrapSend} from '../helpers/protocol';
import {notFound, ok} from '../utils/rest-maker';
import {User} from '../entities/user-entity';
import {Address} from '../entities/address-entity';
import {getPgRepo} from '../utils/get-pg-repo';

export async function createUserHandler(req: Request<{}, {}, User>, res: Response, next: NextFunction) {
    try {
        const user = await createUser(req.body);
        return wrapSend(res, ok(), user);
    } catch (e: any) {
        next(e);
    }
}

export async function deleteUserHandler(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const user = await findUser({id});

        if (!user) {
            return wrapSend(res, notFound());
        }

        const deletedUser = await deleteUser({id});

        return wrapSend(res, ok(), deletedUser);
    } catch (e) {
        next(e);
    }

}

export async function createUserAddressHandler(req: Request, res: Response, next: NextFunction) {
    const {id: userId} = req.params;
    const {lineA, lineB, lineC, postCode, category} = req.body;

    const userRepo = getPgRepo(User);
    const user = await userRepo.findOne(userId);

    if (!user) {
        return wrapSend(res, notFound({bizLogicMessage: res.__('NULL_USER')}));
    } else {
        const addressRepo = getPgRepo(Address);
        try {
            const address = await addressRepo.save(addressRepo.create({
                line_a: lineA,
                line_b: lineB,
                line_c: lineC,
                post_code: postCode,
                cate: category,
                user
            }));
            return wrapSend(res, ok(), address);

        } catch (e) {
            next(e);
        }


    }
}
