import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'products_image' })
export class ProductImageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'url', length: 100, nullable: false })
  url: string;
  @Column({ name: 'description', length: 255, nullable: false })
  description: string;
  @ManyToOne(() => ProductEntity, (product) => product.description, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: ProductEntity;
}
