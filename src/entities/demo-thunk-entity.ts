import {Column, Entity} from 'typeorm';
import {CommonEntity} from './common-entity';

@Entity('demo_thunk')
export class DemoThunkEntity extends CommonEntity {

    @Column({
        type: 'text',
    })
    content!: string;
}
