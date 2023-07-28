import {Column, Entity, JoinTable, ManyToMany} from 'typeorm';
import {CommonEntity} from './common-entity';
import {ProductEntity} from './product-entity';

@Entity('order')
export class OrderEntity extends CommonEntity {
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


    @ManyToMany(() => ProductEntity,
        {
            // cascade: true means delete connected data while main data is being deleted
            cascade: true
        })
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
    products!: ProductEntity[];
}
