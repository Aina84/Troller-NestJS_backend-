import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, CreateDateColumn } from "typeorm";
import { Workspace } from '../../workspace/entities/workspace.entity';
import { Commentary } from '../../commentary/entities/commentary.entity';
import { Member } from '../../member/entities/member.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    createdAt: Date;

    // workspaces the user is a member of
    @ManyToMany(() => Workspace, workspace => workspace.users)
    workspaces: Workspace[];

    // workspaces the user owns
    @OneToMany(() => Workspace, workspace => workspace.owner)
    ownedWorkspaces: Workspace[];

    // cards assignments via Member entity
    @OneToMany(() => Member, member => member.user)
    members: Member[];

    // comments written by user
    @OneToMany(() => Commentary, commentary => commentary.user)
    commentaries: Commentary[];
}
