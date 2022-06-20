import { Controller, Get } from '@nestjs/common';

@Controller('institutes')
export class InstitutesController {
    @Get()
  findAll(): string {
    return 'This action returns all institutes';
  }
}
