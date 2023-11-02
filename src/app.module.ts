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
      host: "monorail.proxy.rlwy.net", //localhost
      port: 51872, //3307
      username: "root", //user_crud
      password: "gBCcF2H-63E-24CG5A2a-aDaCf2fBG5a", //root
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
