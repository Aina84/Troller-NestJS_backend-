import { Injectable } from '@nestjs/common';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Checklist } from './entities/checklist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChecklistService {
  constructor(
    @InjectRepository(Checklist)
    private checkListsRepository : Repository<Checklist>
  ){}

  create(createChecklistDto: CreateChecklistDto) {
    const checklist = this.checkListsRepository.create(createChecklistDto);
    return this.checkListsRepository.save(checklist);
  }

  async findAll(): Promise<Checklist[]> {
    return await this.checkListsRepository.find();
  }

  async findOne(id: number): Promise<Checklist> {
    return await this.checkListsRepository.findOneBy({id});
  }

  async update(id: number, updateChecklistDto: UpdateChecklistDto) : Promise<Checklist | null> {
    const result = await this.checkListsRepository.update(id, updateChecklistDto);
    return result.affected>0 ? this.checkListsRepository.findOneBy({id}) : null;
  }

  async remove(id: number) {
    const result = await this.checkListsRepository.delete(id);  
    return result.affected > 0;
  }
}
