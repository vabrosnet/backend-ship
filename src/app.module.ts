import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DataSourceConfig } from './config/data.source';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipsModule } from './ships/ships.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true
    }),

    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    UsersModule,
    ShipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


