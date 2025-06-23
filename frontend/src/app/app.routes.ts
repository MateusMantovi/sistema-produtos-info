// frontend/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProductListComponent },
  { path: 'produtos/novo', component: ProductFormComponent },
  { path: 'produtos/editar/:id', component: ProductFormComponent },
  // Rota curinga para redirecionar qualquer URL não encontrada
  { path: '**', redirectTo: 'produtos' },
];
