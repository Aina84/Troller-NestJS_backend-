import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabelService } from './label.service';
import { LabelController } from './label.controller';
import { Label } from './entities/label.entity';
import { Card } from '../card/entities/card.entity';
import { Workspace } from '../workspace/entities/workspace.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Label, Card, Workspace])],
  controllers: [LabelController],
  providers: [LabelService],
  exports: [TypeOrmModule],
})
export class LabelModule {}
