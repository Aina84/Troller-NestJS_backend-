import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private listsRepository : Repository<List>
  ){}
  async create(createListDto: CreateListDto) : Promise<List> {
    const newList = this.listsRepository.create({...createListDto, createdAt: (new Date()).toLocaleDateString()})
    return this.listsRepository.save(newList);
  }

  async findAll() : Promise<List[]> {
    return this.listsRepository.find();
  }

  async findOne(id: number) : Promise<List | null> {
    return this.listsRepository.findOneBy({id});
  }

  async update(id: number, updateListDto: UpdateListDto) : Promise<List | null> {
    const result = await this.listsRepository.update(id, updateListDto);
    return result.affected > 0 ? this.listsRepository.findOneBy({id}) : null;
  }

  async remove(id: number) : Promise<boolean> {
    const result = await this.listsRepository.delete(id);
    return typeof result.affected == 'number' ? result.affected > 0 : false ;
  }
}
