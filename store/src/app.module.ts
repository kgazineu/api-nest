import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [UsersModule, ProductModule],
})
export class AppModule {}
