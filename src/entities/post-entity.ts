import {Column, Entity} from 'typeorm';
import {CommonEntity} from './common-entity';

@Entity('post')
export class Post extends CommonEntity {

    @Column({
        type: 'text',
    })
    content!: string;
}
