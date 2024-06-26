import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsRepository {
  private products = [];

  async save(product) {
    this.products.push(product);
  }

  async findAll() {
    return this.products;
  }

  private findById(id: string) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new Error('Produto não existe');
    }

    return product;
  }

  async update(id: string, dadosProduto: Partial<ProductEntity>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const product = this.findById(id);
    Object.entries(dadosProduto).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      product[chave] = valor;
    });

    return product;
  }

  async delete(id: string) {
    const removedProduct = this.findById(id);
    this.products = this.products.filter((product) => product.id !== id);
    return removedProduct;
  }
}
