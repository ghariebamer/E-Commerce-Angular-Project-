import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }



createcart(model:any){
 return this.http.post("https://fakestoreapi.com/carts",model);
}

}
