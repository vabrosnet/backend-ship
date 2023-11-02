import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
  envFilePath: '.development.env',
  isGlobal: true
});

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
    type: 'mysql',
    host: configService.get('MYSQLHOST'),
    port: configService.get('MYSQLPORT'),
    username: configService.get('MYSQLUSER'),
    password: configService.get('MYSQL_ROOT_PASSWORD'),
    database: configService.get('MYSQLDATABASE'),
    entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: true,
    migrationsRun: true,
    logging: false,
//   namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);