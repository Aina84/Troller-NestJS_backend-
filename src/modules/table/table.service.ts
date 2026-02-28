import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TableService {
  constructor (
    @InjectRepository(Table)
    private tablesRepository : Repository<Table>
  ){}
  
  async create(createTableDto: CreateTableDto) {
    const newTable = await this.tablesRepository.create({...createTableDto, createdAt: (new Date()).toISOString()});
    return this.tablesRepository.save(newTable);
  }

  async findAll() : Promise<Table[]> {
    return this.tablesRepository.find();
  }

  async findAllByWorkspace(workspaceId: number) : Promise<Table[]> {
    return this.tablesRepository.find({
      where: {workspaceId}
    });
  }

  async findOne(id: number) : Promise<Table | null> {
    return this.tablesRepository.findOneBy({id});
  }

  async update(id: number, updateTableDto: UpdateTableDto) : Promise<Table | null> {
    const result = await this.tablesRepository.update(id, updateTableDto);
    return result.affected > 0 ? this.tablesRepository.findOneBy({id}) : null;
  }

  async remove(id: number) : Promise<boolean> {
    const result = await this.tablesRepository.delete(id);
    return typeof result.affected == 'number' ? result.affected > 0 : false ;
  }
}
