import {Column, Entity} from 'typeorm';
import {IdEntity} from './common-entity';

@Entity('session')
export class SessionEntity extends IdEntity {
    @Column({
        type: 'text',
    })
    user_id!: string;

    @Column({
        type: 'text',
    })
    user_agent!: string;

    @Column({
        type: 'boolean',
    })
    valid!: boolean;
}