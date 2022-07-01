import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
productCart:any[]=[];
total:number=0;
success:boolean=false;
  constructor( private service:CartService) { }

  ngOnInit(): void {
    this.getCartproduct();
  }


  getCartproduct(){
    if("cart" in localStorage){
      this.productCart=JSON.parse(localStorage.getItem("cart")!);
    }
    this.gettotal();
  }


  gettotal(){
this.total=0;
for(let x in this.productCart){
this.total += this.productCart[x].item.price * this.productCart[x].quantity;
}

};

plusamount(index:number){

  this.productCart[index].quantity++;
  this.gettotal();
localStorage.setItem("cart",JSON.stringify(this.productCart));
}

minamount(index:number){
  this.productCart[index].quantity--;
  this.gettotal();
  localStorage.setItem("cart",JSON.stringify(this.productCart));


}
detectedchange(){
  localStorage.setItem("cart",JSON.stringify(this.productCart));
  this.gettotal();
}

deleteItem(index:number){

  this.productCart.splice(index,1);
  localStorage.setItem("cart",JSON.stringify(this.productCart));
  this.gettotal();

}

deletecart(){
  this.productCart=[];
  localStorage.setItem("cart",JSON.stringify(this.productCart));
  this.gettotal();
}

addcart(){
  let product=this.productCart.map(item=>{
    return {product:item.item.id,quantity:item.quantity}
  });
let model={
  userId:2,
  date:new Date(),
  products:product
}
this.service.createcart(model).subscribe(res=>{
this.success=true

})

}



}
