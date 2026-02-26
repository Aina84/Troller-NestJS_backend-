import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Card } from '../../card/entities/card.entity';
import { Workspace } from '../../workspace/entities/workspace.entity';

@Entity()
export class Label {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    color: string;

    @ManyToOne(() => Workspace, workspace => workspace.labels, { onDelete: 'CASCADE' })
    workspace: Workspace;

    @Column()
    workspaceId: number;

    @ManyToMany(() => Card, card => card.labels)
    cards: Card[];
}
