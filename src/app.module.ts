import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { InstitutesController } from './controllers/institutes/institutes.controller';
import { InstitutesTypeController } from './controllers/institutes_type/institutes_type.controller';
import { ZonesController } from './controllers/zones/zones.controller';

@Module({
  imports: [ ],
  controllers: [AppController, UsersController, InstitutesController, InstitutesTypeController, ZonesController],
  providers: [AppService],
})
export class AppModule {}
