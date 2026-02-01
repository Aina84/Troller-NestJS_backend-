import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChecklistitemService } from './checklistitem.service';
import { CreateChecklistitemDto } from './dto/create-checklistitem.dto';
import { UpdateChecklistitemDto } from './dto/update-checklistitem.dto';

@Controller('checklistitem')
export class ChecklistitemController {
  constructor(private readonly checklistitemService: ChecklistitemService) {}

  @Post()
  create(@Body() createChecklistitemDto: CreateChecklistitemDto) {
    return this.checklistitemService.create(createChecklistitemDto);
  }

  @Get()
  findAll() {
    return this.checklistitemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checklistitemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChecklistitemDto: UpdateChecklistitemDto) {
    return this.checklistitemService.update(+id, updateChecklistitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checklistitemService.remove(+id);
  }
}
