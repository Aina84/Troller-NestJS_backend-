import { Module } from '@nestjs/common';
import { ChecklistitemService } from './checklistitem.service';
import { ChecklistitemController } from './checklistitem.controller';

@Module({
  controllers: [ChecklistitemController],
  providers: [ChecklistitemService],
})
export class ChecklistitemModule {}
