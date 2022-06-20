import { Test, TestingModule } from '@nestjs/testing';
import { InstitutesTypeController } from './institutes_type.controller';

describe('InstitutesTypeController', () => {
  let controller: InstitutesTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitutesTypeController],
    }).compile();

    controller = module.get<InstitutesTypeController>(InstitutesTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
