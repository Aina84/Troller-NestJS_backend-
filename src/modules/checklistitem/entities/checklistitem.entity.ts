import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Checklist } from '../../checklist/entities/checklist.entity';

@Entity()
export class Checklistitem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: false })
    isDone: boolean;

    @Column({ default: 0 })
    position: number;

    @ManyToOne(() => Checklist, checklist => checklist.items, { onDelete: 'CASCADE' })
    checklist: Checklist;

    @Column()
    checklistId: number;
}
