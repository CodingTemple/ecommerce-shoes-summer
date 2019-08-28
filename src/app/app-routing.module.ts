import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CreateProdComponent } from './create-prod/create-prod.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '', component:HomeComponent},
  {path: 'create', component:CreateProdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
