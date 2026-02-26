import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChecklistitemService } from './checklistitem.service';
import { ChecklistitemController } from './checklistitem.controller';
import { Checklistitem } from './entities/checklistitem.entity';
import { Checklist } from '../checklist/entities/checklist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Checklistitem, Checklist])],
  controllers: [ChecklistitemController],
  providers: [ChecklistitemService],
  exports: [TypeOrmModule],
})
export class ChecklistitemModule {}
