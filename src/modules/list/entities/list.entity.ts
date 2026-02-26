import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Table } from '../../table/entities/table.entity';
import { Card } from '../../card/entities/card.entity';

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: 0 })
    position: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Table, table => table.lists, { onDelete: 'CASCADE' })
    table: Table;

    @Column()
    tableId: number;

    @OneToMany(() => Card, card => card.list)
    cards: Card[];
}
