import {BaseEntity, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class IdEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
}

@Entity()
export class CommonEntity extends IdEntity {
    @CreateDateColumn()
    create_at!: Date;

    @UpdateDateColumn()
    update_at!: Date;
}
