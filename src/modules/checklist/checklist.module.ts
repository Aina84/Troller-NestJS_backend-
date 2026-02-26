import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChecklistService } from './checklist.service';
import { ChecklistController } from './checklist.controller';
import { Checklist } from './entities/checklist.entity';
import { Checklistitem } from '../checklistitem/entities/checklistitem.entity';
import { Card } from '../card/entities/card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Checklist, Checklistitem, Card])],
  controllers: [ChecklistController],
  providers: [ChecklistService],
  exports: [TypeOrmModule],
})
export class ChecklistModule {}
