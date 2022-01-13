import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {CommonEntity} from './common-entity';
import {User} from './user-entity';

enum AddressCate {
    HOME = 'HOME',
    WORK = 'WORK',
    SCHOOL = 'SCHOOL'
}

@Entity('address')
export class Address extends CommonEntity {
    @Column({
        type: 'text',
    })
    line_a!: string;

    @Column({
        type: 'text',
    })
    line_b!: string;

    @Column({
        type: 'text',
    })
    line_c!: string;

    @Column({
        type: 'int4',
    })
    post_code!: number;

    @Column({
        type: 'enum',
        enum: AddressCate,
    })
    cate: string = AddressCate.HOME;

    @ManyToOne(() => User, user => user.addresses)

    @JoinColumn({
        name: 'user_id'
    })
    user: User | undefined;
}
