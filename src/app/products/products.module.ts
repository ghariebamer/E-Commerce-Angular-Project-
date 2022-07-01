import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './component/product/product.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule ,
    SharedModule,
    FormsModule
  ],
})
export class ProductsModule { }
