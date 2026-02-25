import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './modules/user/user.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';
import { TableModule } from './modules/table/table.module';
import { ListModule } from './modules/list/list.module';
import { CardModule } from './modules/card/card.module';
import { CommentaryModule } from './modules/commentary/commentary.module';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { LabelModule } from './modules/label/label.module';
import { ChecklistModule } from './modules/checklist/checklist.module';
import { ChecklistitemModule } from './modules/checklistitem/checklistitem.module';
import { MemberModule } from './modules/member/member.module';
import { ActivityModule } from './modules/activity/activity.module';
import { AuthModule } from './modules/auth/auth.module';

const TypeOrmM = TypeOrmModule.forRoot({
  type:'postgres',
  host:'localhost',
  port:5432,
  username:'postgres',
  password:'',
  database:'Troller'
});

@Module({
  imports: [TypeOrmM,UserModule, WorkspaceModule, TableModule, ListModule, CardModule, CommentaryModule, AttachmentModule, LabelModule, ChecklistModule, ChecklistitemModule, MemberModule, ActivityModule, AuthModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
