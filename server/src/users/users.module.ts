import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ServiceService } from './service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ControllerController],
  providers: [ServiceService],
})
export class UsersModule {}
