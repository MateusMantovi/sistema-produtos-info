// frontend/src/app/models/produto.model.ts
export interface Produto {
  id?: string;
  nome: string;
  categoria?: string;
  descricao?: string;
  preco: number;
  estoque: number;
  dataCriacao?: string;
  dataAtualizacao?: string;
}
