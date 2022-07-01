import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import * as XLSX from 'xlsx';
import { JsonpClientBackend } from '@angular/common/http';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
AllData:any;
Categories:any[]=[];
loader:boolean=false;
productCard:any[]=[];

constructor( private _ProductService:ProductService) { }

  ngOnInit(): void {
    this.GetProducts();
    this.GetCategories();
  }

GetProducts(){
  this.loader=true;
  this._ProductService.getAllproducts().subscribe((res:any)=>{
    console.log(res)
    this.AllData=res;
    this.loader=false;

  },(err)=>{
    this.loader=false;

    alert("Error")})
}

GetCategories(){
  this.loader=true;
  this._ProductService.getAllCategories().subscribe((res:any)=>{
    this.loader=true;
    this.Categories=res;
    this.loader=false;
  },(err)=>{
    this.loader=false;

    alert("Error")})

}

onChange(event:any){
let value= event.target.value;
if(!value){
  this.GetProducts();
}
//console.log(value)
this._ProductService.getprivatecategory(value).subscribe((res:any)=>{
  this.AllData=res;
},(err)=>{alert("Error")})


}


Export(){

this._ProductService.exportExeclService(this.AllData,'Allproducts')


}

AddtoCart(event:any){
  console.log(event)
if ("cart" in localStorage){
  this.productCard= JSON.parse(localStorage.getItem("cart")!)

  let exist= this.productCard.find(item=>item.item.id==event.item.id);
  if(exist){   // to check product in cart or not to deny duplicated
    alert("this product already exist in Cart");
  }else{
    this.productCard.push(event);
    localStorage.setItem("cart",JSON.stringify(this.productCard));
  }

}else{
  this.productCard.push(event);
  localStorage.setItem("cart",JSON.stringify(this.productCard));
}


}



}
