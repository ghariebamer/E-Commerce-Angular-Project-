import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/component/cart/cart.component';
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { ProductdetailsComponent } from './products/component/productdetails/productdetails.component';

const routes: Routes = [
  {path:"product",component:AllProductsComponent},
  {path:"details/:id",component:ProductdetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",redirectTo:"product",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
