import { Injectable } from '@nestjs/common';
import { CreateChecklistitemDto } from './dto/create-checklistitem.dto';
import { UpdateChecklistitemDto } from './dto/update-checklistitem.dto';

@Injectable()
export class ChecklistitemService {
  create(createChecklistitemDto: CreateChecklistitemDto) {
    return 'This action adds a new checklistitem';
  }

  findAll() {
    return `This action returns all checklistitem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checklistitem`;
  }

  update(id: number, updateChecklistitemDto: UpdateChecklistitemDto) {
    return `This action updates a #${id} checklistitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} checklistitem`;
  }
}
