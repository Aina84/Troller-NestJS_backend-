import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { Member } from './entities/member.entity';
import { Card } from '../card/entities/card.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Card, User])],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [TypeOrmModule],
})
export class MemberModule {}
