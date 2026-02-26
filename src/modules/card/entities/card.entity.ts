import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { List } from '../../list/entities/list.entity';
import { Checklist } from '../../checklist/entities/checklist.entity';
import { Commentary } from '../../commentary/entities/commentary.entity';
import { Label } from '../../label/entities/label.entity';
import { Member } from '../../member/entities/member.entity';

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    dueDate: Date;

    @Column({ default: 0 })
    position: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => List, list => list.cards, { onDelete: 'CASCADE' })
    list: List;

    @Column()
    listId: number;

    @OneToMany(() => Checklist, checklist => checklist.card)
    checklists: Checklist[];

    @OneToMany(() => Commentary, commentary => commentary.card)
    commentaries: Commentary[];

    @ManyToMany(() => Label, label => label.cards)
    @JoinTable({ name: 'card_label' })
    labels: Label[];

    @OneToMany(() => Member, member => member.card)
    members: Member[];
}
