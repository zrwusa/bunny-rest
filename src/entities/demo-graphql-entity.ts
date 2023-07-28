import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('demo_graphql')
export class DemoGraphql extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'text',
    })
    name!: string;

    @Column({
        type: 'decimal',
    })
    price!: number;

    @CreateDateColumn()
    createdAt: Date | undefined;

    @UpdateDateColumn()
    updatedAt: Date | undefined;
}
