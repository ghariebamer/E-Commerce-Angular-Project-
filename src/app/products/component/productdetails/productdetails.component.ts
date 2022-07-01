import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
id:any;
data:any;
loading:boolean=false;
  constructor(private route:ActivatedRoute, private _service:ProductService) {

    this.id= this.route.snapshot.paramMap.get('id');

    // console.log(this.id)
  }

  ngOnInit(): void {
    this.getproductdata();
  }

getproductdata(){
  this.loading=true;

this._service.getproductbyid(this.id).subscribe((res:any)=>{
   this.data=res;
   this.loading=false;

},(error:any)=>{
  this.loading=false;
  alert(error);}
)
}

}
