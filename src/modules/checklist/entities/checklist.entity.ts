import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Card } from '../../card/entities/card.entity';
import { Checklistitem } from '../../checklistitem/entities/checklistitem.entity';

@Entity()
export class Checklist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: 0 })
    position: number;

    @ManyToOne(() => Card, card => card.checklists, { onDelete: 'CASCADE' })
    card: Card;

    @Column()
    cardId: number;

    @OneToMany(() => Checklistitem, item => item.checklist)
    items: Checklistitem[];
}
