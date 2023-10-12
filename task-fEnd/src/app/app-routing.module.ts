import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './Order/order/order.component';
import { CartComponent } from './cart/cart/cart.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'product-list', component: ProductListComponent},
  {path:'product-create', component: ProductCreateComponent},
  {path:'cart', component: CartComponent},
  {path:'order', component: OrderComponent},
  {path:'', redirectTo:'/product-list', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
