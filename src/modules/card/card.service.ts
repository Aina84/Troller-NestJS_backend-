import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository : Repository<Card>
  ){}

  async create(createCardDto: CreateCardDto) : Promise<Card> {
    const card = this.cardsRepository.create(createCardDto);
    return await this.cardsRepository.save(card);
  }

  async findAll() {
    return await this.cardsRepository.find();
  }

  async findAllByList(listId: number) {
    return await this.cardsRepository.find({
      where: {listId}
    });
  }

  async findAllByTable(tableId: number) {
    return await this.cardsRepository.find({
      where: {tableId}
    });
  }

  async findOne(id: number) {
    return await this.cardsRepository.findOneBy({id});
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    await this.cardsRepository.update(id, updateCardDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.cardsRepository.delete(id);
  }
}
