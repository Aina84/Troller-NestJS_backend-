import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Workspace } from '../../workspace/entities/workspace.entity';
import { List } from '../../list/entities/list.entity';

@Entity()
export class Table {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: 0 })
    position: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Workspace, workspace => workspace.tables, { onDelete: 'CASCADE' })
    workspace: Workspace;

    @Column()
    workspaceId: number;

    @OneToMany(() => List, list => list.table)
    lists: List[];
}
