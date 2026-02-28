import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) : Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
      createdAt: (new Date()).toISOString()
    });
    return await this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return await this.usersRepository.findOneBy({id});
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOneBy({email});
  }

  async update(id: number, updateUserDto: UpdateUserDto) : Promise<User | null> {
    const result = await this.usersRepository.update(id, updateUserDto);
    if (result.affected === 0) {
      return null;
    }
    return await this.findOne(id);
  }

   async remove(id: number) : Promise<boolean> {
    const result = await this.usersRepository.delete(id);
    return typeof result.affected == 'number' ? result.affected > 0 : false ;
  }
}
