import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
@Input() title="";
@Input() data:any[]=[];
@Output() selectedvalue= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  detectchange(event:any){

    this.selectedvalue.emit(event);

  }

}
