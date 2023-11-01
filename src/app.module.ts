import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipsModule } from './ships/ships.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "roundhouse.proxy.rlwy.net", //localhost
      port: 12504, //3307
      username: "root", //user_crud
      password: "ACGgEehbdHCH245Bf2ehC-Dbf2bBFGAh", //root
      database: "railway", //"db_crud",
      //autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //no usar en producción
    }),
    UsersModule,
    ShipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
