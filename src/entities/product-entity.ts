import {Column, Entity, ManyToMany} from 'typeorm';
import {CommonEntity} from './common-entity';
import {Order} from './order-entity';


@Entity('product')
export class Product extends CommonEntity {

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
    price!: string;

    @Column({
        type: 'text',
        nullable: true
    })
    image!: string;

    @ManyToMany(() => Order)
    orders!: Order[];
}
