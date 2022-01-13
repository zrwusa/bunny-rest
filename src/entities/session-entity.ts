import {Column, Entity} from 'typeorm';
import {CommonEntity} from './common-entity';

@Entity('session')
export class Session extends CommonEntity {
    @Column({
        type: 'text',
    })
    user_id!: string;

    @Column({
        type: 'boolean',
    })
    valid!: boolean;

    @Column({
        type: 'text',
    })
    userAgent!: string;
}
