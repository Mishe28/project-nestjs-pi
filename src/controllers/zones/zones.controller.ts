import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Controller('zones')
export class ZonesController {

    @Post()
    createZone(
      @Body('name') name: string, 
      @Body('location') location: string
    ) {
      return `Creo el producto ${name} con descripción ${location}.`;
    }

  /*@Get()
  findAll(): string {
    return 'This action returns all zones';
  }*/
}
