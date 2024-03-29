import {Column, Entity, ManyToMany} from 'typeorm';
import {CommonEntity} from './common-entity';
import {OrderEntity} from './order-entity';


@Entity('product')
export class ProductEntity extends CommonEntity {

    @Column({
        type: 'text'
    })
    title!: string;

    @Column({
        type: 'text'
    })
    description!: string;

    @Column({
        type: 'text'
    })
    price!: number;

    @Column({
        type: 'text',
        nullable: true
    })
    image!: string;

    @ManyToMany(() => OrderEntity,
        {
            // cascade: true means delete connected data while main data is being deleted
            cascade: true
        })
    orders!: OrderEntity[];
}
