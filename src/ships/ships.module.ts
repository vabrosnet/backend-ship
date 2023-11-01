import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipsController } from './ships.controller';
import { ShipsService } from './ships.service';
import { Ship } from './ship.entity';
// import { Flag } from './flag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ship])],
  controllers: [ShipsController],
  providers: [ShipsService],
  exports: [],
})
export class ShipsModule {}
