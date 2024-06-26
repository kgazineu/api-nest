class DescriptionProduct {
  name: string;
  description: string;
}

class ImageProduct {
  url: string;
  description: string;
}

export class ProductEntity {
  id: string;
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  category: string;
  characteristic: DescriptionProduct[];
  image: ImageProduct[];
}
