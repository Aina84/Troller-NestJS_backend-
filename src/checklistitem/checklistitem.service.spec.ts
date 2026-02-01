import { Test, TestingModule } from '@nestjs/testing';
import { ChecklistitemService } from './checklistitem.service';

describe('ChecklistitemService', () => {
  let service: ChecklistitemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChecklistitemService],
    }).compile();

    service = module.get<ChecklistitemService>(ChecklistitemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
