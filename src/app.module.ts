import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { TableModule } from './table/table.module';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { CommentaryModule } from './commentary/commentary.module';
import { AttachmentModule } from './attachment/attachment.module';
import { LabelModule } from './label/label.module';
import { ChecklistModule } from './checklist/checklist.module';
import { ChecklistitemModule } from './checklistitem/checklistitem.module';
import { MemberModule } from './member/member.module';
import { ActivityModule } from './activity/activity.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, WorkspaceModule, TableModule, ListModule, CardModule, CommentaryModule, AttachmentModule, LabelModule, ChecklistModule, ChecklistitemModule, MemberModule, ActivityModule, AuthModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
