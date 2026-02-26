import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Table } from '../../table/entities/table.entity';
import { Label } from '../../label/entities/label.entity';
@Entity()
export class Workspace {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    // owner of the workspace
    @ManyToOne(() => User, user => user.ownedWorkspaces, { onDelete: 'SET NULL' })
    owner: User;

    @Column({ nullable: true })
    ownerId: number;

    // users who belong to the workspace
    @ManyToMany(() => User, user => user.workspaces)
    @JoinTable()
    users: User[];

    // boards (tables) contained in this workspace
    @OneToMany(() => Table, table => table.workspace)
    tables: Table[];

    // labels defined in this workspace
    @OneToMany(() => Label, label => label.workspace)
    labels: Label[];
}
