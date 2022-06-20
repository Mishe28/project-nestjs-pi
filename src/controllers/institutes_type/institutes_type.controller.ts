import { Controller, Get } from '@nestjs/common';

@Controller('institutes-type')
export class InstitutesTypeController {
    @Get()
  findAll(): string {
    return 'This action returns all institutes type';
  }
}
