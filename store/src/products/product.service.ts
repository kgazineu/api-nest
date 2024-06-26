import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(productEntity: ProductEntity) {
    await this.productRepository.save(productEntity);
  }

  async findAllProducts() {
    const savedProducts = await this.productRepository.find();
    const listProducts = savedProducts.map(
      (product) => new listProducts(product.id, product.name),
    );
    return listProducts;
  }

  async updateProduct(id: string, productEntity: UpdateProductDTO) {
    await this.productRepository.update(id, productEntity);
  }

  async deleteProduct(id: string) {
    await this.productRepository.delete(id);
  }
}
