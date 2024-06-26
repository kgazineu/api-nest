import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductsRepository } from './product.repository';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductsController {
  constructor(
    private productsRepository: ProductsRepository,
    private productService: ProductService,
  ) {}

  @Post()
  async createProduct(@Body() productData) {
    this.productService.createProduct(productData);
    return productData;
  }

  @Get()
  async getProducts() {
    return this.productService.findAllProducts();
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() dadosProduto: UpdateProductDTO,
  ) {
    const produtoAlterado = await this.productService.updateProduct(
      id,
      dadosProduto,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      produto: produtoAlterado,
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const produtoRemovido = await this.productService.deleteProduct(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: produtoRemovido,
    };
  }
}
