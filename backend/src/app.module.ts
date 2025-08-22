import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './user/model/user.model';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest-startup',
      entities: [User, Product],
      synchronize: true,
    }),
    UserModule,
    ProductsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
