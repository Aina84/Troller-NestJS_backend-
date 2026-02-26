import { Injectable } from '@nestjs/common';
import { CreateCommentaryDto } from './dto/create-commentary.dto';
import { UpdateCommentaryDto } from './dto/update-commentary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commentary } from './entities/commentary.entity';

@Injectable()
export class CommentaryService {
  constructor(
    @InjectRepository(Commentary)
    private commentariesRepository : Repository<Commentary>
  ){}
  
  create(createCommentaryDto: CreateCommentaryDto) {
    const commentary = this.commentariesRepository.create(createCommentaryDto);
    return this.commentariesRepository.save(commentary);
  }

  async findAll() : Promise<Commentary[]> {
    return await this.commentariesRepository.find();
  }

  async findOne(id: number) : Promise<Commentary | null> {
    return await this.commentariesRepository.findOneBy({id});
  }

  async update(id: number, updateCommentaryDto: UpdateCommentaryDto) : Promise<Commentary | null> {
    await this.commentariesRepository.update(id,updateCommentaryDto)
    return await this.commentariesRepository.findOneBy({id});
  }

  async remove(id: number) {
    return await this.commentariesRepository.delete(id);
  }
}
