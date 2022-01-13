import {Column, Entity, JoinTable, ManyToMany} from 'typeorm';
import {CommonEntity} from './common-entity';
import {Product} from './product-entity';

@Entity('order')
export class Order extends CommonEntity {
    @Column({
        type: 'numeric',
    })
    price!: number;

    @Column({
        type: 'text',
    })
    address!: string;

    @Column({
        type: 'int4',
    })
    amount!: number;


    @ManyToMany(() => Product)
    @JoinTable({
        name: 'orders_products',
        joinColumn: {
            name: 'order',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'product',
            referencedColumnName: 'id'
        }
    })
    products!: Product[];
}
