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
import { User } from './modules/user/entities/user.entity';

const TypeOrmM = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
});

@Module({
  imports: [TypeOrmM,UserModule, WorkspaceModule, TableModule, ListModule, CardModule, CommentaryModule, AttachmentModule, LabelModule, ChecklistModule, ChecklistitemModule, MemberModule, ActivityModule, AuthModule],
  controllers: [],
  providers: [],
  
})

export class AppModule {}
