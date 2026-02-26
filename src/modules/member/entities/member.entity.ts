import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Card } from '../../card/entities/card.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    role: string;

    @CreateDateColumn()
    assignedAt: Date;

    @ManyToOne(() => Card, card => card.members, { onDelete: 'CASCADE' })
    card: Card;

    @Column()
    cardId: number;

    @ManyToOne(() => User, user => user.members, { onDelete: 'CASCADE' })
    user: User;

    @Column()
    userId: number;
}
