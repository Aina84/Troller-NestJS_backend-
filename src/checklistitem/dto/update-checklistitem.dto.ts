import { PartialType } from '@nestjs/swagger';
import { CreateChecklistitemDto } from './create-checklistitem.dto';

export class UpdateChecklistitemDto extends PartialType(CreateChecklistitemDto) {}
