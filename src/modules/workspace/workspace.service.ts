import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace)
    private workspacesRepository : Repository<Workspace>
  ){}
  async create(createWorkspaceDto: CreateWorkspaceDto) : Promise<Workspace> {
    const newWorkspace = this.workspacesRepository.create({...createWorkspaceDto, createdAt: (new Date()).toLocaleDateString()})
    return await this.workspacesRepository.save(newWorkspace);
  }

  async findAll() : Promise<Workspace[]> {
    return await this.workspacesRepository.find();
  }

  async findOne(id: number): Promise<Workspace> {
    return await this.workspacesRepository.findOneBy({id});
  }

  async update(id: number, updateWorkspaceDto: UpdateWorkspaceDto): Promise<Workspace | null> {
    const result = await this.workspacesRepository.update(id, updateWorkspaceDto);
    return result.affected > 0 ? this.workspacesRepository.findOneBy({id}) : null;  
  }

  async remove(id: number) : Promise<boolean> {
    const result = await this.workspacesRepository.delete(id);
    return typeof result.affected == 'number' ? result.affected > 0 : false ;
  }
}
