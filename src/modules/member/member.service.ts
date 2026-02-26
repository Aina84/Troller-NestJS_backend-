import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private membersRepository : Repository<Member>
  ){}
  create(createMemberDto: CreateMemberDto) {
    const member = this.membersRepository.create(createMemberDto);
    return this.membersRepository.save(member);
  }

  async findAll() {
    return await this.membersRepository.find();
  }

  async findOne(id: number) {
    return await this.membersRepository.findOneBy({id});
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    await this.membersRepository.update(id, updateMemberDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.membersRepository.delete(id);
    return result.affected > 0;
  }
}
