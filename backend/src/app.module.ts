import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    // Config module
    ConfigModule.forRoot({
      envFilePath: [`${ __dirname }/share/config/.development.env`]
    }),

    // TypeORM config
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: 'todoapp',
        entities: [
          `${ __dirname }/share/entities/*.entity.{.ts,.js}`
        ]
      })
    })
  ],
})
export class AppModule {}
