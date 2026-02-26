import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentaryService } from './commentary.service';
import { CommentaryController } from './commentary.controller';
import { Commentary } from './entities/commentary.entity';
import { Card } from '../card/entities/card.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Commentary, Card, User])],
  controllers: [CommentaryController],
  providers: [CommentaryService],
  exports: [TypeOrmModule],
})
export class CommentaryModule {}
