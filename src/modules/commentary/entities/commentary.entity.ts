import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Card } from '../../card/entities/card.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Commentary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Card, card => card.commentaries, { onDelete: 'CASCADE' })
    card: Card;

    @Column()
    cardId: number;

    @ManyToOne(() => User, user => user.commentaries, { onDelete: 'SET NULL' })
    user: User;

    @Column()
    userId: number;
}
