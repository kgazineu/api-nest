import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/user.module';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';

@Module({
  imports: [UsersModule],
  controllers: [ProductsController],
  providers: [ProductsRepository],
})
export class ProductModule {}
