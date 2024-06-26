class ListaCaracteristicaProdutoDTO {
  name: string;
  description: string;
}

class ListaImagemProdutoDTO {
  url: string;
  description: string;
}

export class ListaProdutoDTO {
  id: string;
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  category: string;
  characteristic: ListaCaracteristicaProdutoDTO[];
  image: ListaImagemProdutoDTO[];
}
