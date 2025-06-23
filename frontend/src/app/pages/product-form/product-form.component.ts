import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private produtoService = inject(ProdutoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  productForm: FormGroup;
  isEditMode = false;
  private productId: string | null = null;

  constructor() {
    this.productForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      categoria: [''],
      descricao: [''],
      preco: [null, [Validators.required, Validators.min(0.01)]],
      estoque: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEditMode = true;
      this.produtoService.getProduto(this.productId).subscribe((produto) => {
        this.productForm.patchValue(produto);
      });
    }
  }

  get f() {
    return this.productForm.controls;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.f[controlName];
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const action = this.isEditMode
      ? this.produtoService.updateProduto(
          this.productId!,
          this.productForm.value
        )
      : this.produtoService.createProduto(this.productForm.value);

    action.subscribe({
      next: () => this.router.navigate(['/produtos']),
      error: (err) => {
        console.error('Erro ao salvar produto', err);
        alert('Ocorreu um erro ao salvar o produto.');
      },
    });
  }
}
