import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products_description' })
export class ProductDescription {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'name', length: 100, nullable: false })
  name: string;
  @Column({ name: 'description', length: 255, nullable: false })
  description: string;
}
