import { Injectable } from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Label } from './entities/label.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LabelService {
  constructor(
    @InjectRepository(Label)
    private labelsRepository : Repository<Label>
  ){}

  async create(createLabelDto: CreateLabelDto) : Promise<Label> {
    const label = this.labelsRepository.create(createLabelDto);
    return this.labelsRepository.save(label);
  }

  async findAll() : Promise<Label[]> {
    return this.labelsRepository.find();
  }

  async findOne(id: number) : Promise<Label> {
    return this.labelsRepository.findOneBy({id});
  }

  async update(id: number, updateLabelDto: UpdateLabelDto) : Promise<Label | null> {
    try {
      await this.labelsRepository.update(id, updateLabelDto);
      return this.findOne(id);
    } catch (error) {
      return null
    }
  }

  async remove(id: number) {
    return this.labelsRepository.delete(id);
  }
}
