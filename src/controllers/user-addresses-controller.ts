import {NextFunction, Request, Response} from 'express';
import {UserEntity} from '../entities/user-entity';
import {wrapSend} from '../helpers/protocol';
import RESTFul from '../helpers/restful';
import {AddressEntity} from '../entities/address-entity';
import {PgDS} from '../helpers/postgres-data-source';
import {BL} from '../constants/biz-logics';

export async function createUserAddressesCtrl(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    const userRepo = PgDS.getRepository(UserEntity);
    const user = await userRepo.findOneBy({id: id});

    if (!user) {
        return wrapSend(res, RESTFul.notFound, BL.NULL_USER);
    } else {
        const addressRepo = PgDS.getRepository(AddressEntity);
        try {
            const address = await addressRepo.save(addressRepo.create({
                ...body,
                user
            }));
            return wrapSend(res, RESTFul.ok, BL.ASSOCIATE_USER_ADDRESSES_SUCCESS, address);

        } catch (e) {
            next(e);
        }
    }
}
