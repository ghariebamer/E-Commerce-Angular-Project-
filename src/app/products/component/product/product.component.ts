import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() data:any={};
@Output() item =new EventEmitter();
addbutton:boolean=false;
amount:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  Add(){
    // console.log(this.amount);
this.item.emit({item:this.data,quantity:this.amount});
this.addbutton=false;

  }

}
