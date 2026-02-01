import { Test, TestingModule } from '@nestjs/testing';
import { ChecklistitemController } from './checklistitem.controller';
import { ChecklistitemService } from './checklistitem.service';

describe('ChecklistitemController', () => {
  let controller: ChecklistitemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChecklistitemController],
      providers: [ChecklistitemService],
    }).compile();

    controller = module.get<ChecklistitemController>(ChecklistitemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
