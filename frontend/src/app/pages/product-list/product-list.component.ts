import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

import { RouterLink } from '@angular/router';
import { CurrencyPipe, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  private produtoService = inject(ProdutoService);
  public produtos$!: Observable<Produto[]>;

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.produtos$ = this.produtoService.getProdutos();
  }

  deleteProduto(id: string): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.deleteProduto(id).subscribe({
        next: () => this.loadProdutos(),
        error: (err) => {
          console.error('Erro ao excluir produto', err);
          alert('Não foi possível excluir o produto.');
        },
      });
    }
  }
}
