import {NextFunction, Request, Response} from 'express';
import {CreateUserAddressBody, CreateUserAddressParams} from '../schemas/user-addresses-schema';
import {User} from '../entities/user-entity';
import {wrapSend} from '../helpers/protocol';
import RESTFul from '../helpers/rest-maker';
import {Address} from '../entities/address-entity';
import {PgDS} from '../helpers/postgres-data-source';

export async function createUserAddressesCtrl(req: Request<CreateUserAddressParams, any, CreateUserAddressBody>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    const userRepo = PgDS.getRepository(User);
    const user = await userRepo.findOneBy({id: id});

    if (!user) {
        return wrapSend(res, RESTFul.notFound({bizLogicMessage: res.__('NULL_USER')}));
    } else {
        const addressRepo = PgDS.getRepository(Address);
        try {
            const address = await addressRepo.save(addressRepo.create({
                ...body,
                user
            }));
            return wrapSend(res, RESTFul.ok(), address);

        } catch (e) {
            next(e);
        }
    }
}
