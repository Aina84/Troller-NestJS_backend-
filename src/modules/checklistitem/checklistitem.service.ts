import { Injectable, Provider } from '@nestjs/common';
import { CreateChecklistitemDto } from './dto/create-checklistitem.dto';
import { UpdateChecklistitemDto } from './dto/update-checklistitem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Checklistitem } from './entities/checklistitem.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChecklistitemService {
  constructor(
    @InjectRepository(Checklistitem)
    private checklistitemRepository: Repository<Checklistitem>
  ){}

  async create(createChecklistitemDto: CreateChecklistitemDto) : Promise<Checklistitem> {
    const checklistitem = this.checklistitemRepository.create(createChecklistitemDto);
    return await this.checklistitemRepository.save(checklistitem);
  }

  async findAll() : Promise<Checklistitem[]> {
    return await this.checklistitemRepository.find();
  }

  async findOne(id: number) : Promise<Checklistitem> {
    return await this.checklistitemRepository.findOneBy({id});
  }

  async update(id: number, updateChecklistitemDto: UpdateChecklistitemDto) : Promise<Checklistitem | null> {
    try {
      await this.checklistitemRepository.update(id, updateChecklistitemDto);
      return this.findOne(id);
    } catch (error) {
      return null
    }
  }

  async remove(id: number) {
    const result = await this.checklistitemRepository.delete(id);
    return result.affected > 0;
  }
}
