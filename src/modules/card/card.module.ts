import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { Card } from './entities/card.entity';
import { List } from '../list/entities/list.entity';
import { Checklist } from '../checklist/entities/checklist.entity';
import { Commentary } from '../commentary/entities/commentary.entity';
import { Label } from '../label/entities/label.entity';
import { Member } from '../member/entities/member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Card, List, Checklist, Commentary, Label, Member]),
  ],
  controllers: [CardController],
  providers: [CardService],
  exports: [TypeOrmModule],
})
export class CardModule {}
