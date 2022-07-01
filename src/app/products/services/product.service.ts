import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as FileSaver from "file-saver";
import * as XLSX from 'xlsx'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _http:HttpClient) { }


  getAllproducts(){
    return this._http.get('https://fakestoreapi.com/products');
  }


  getAllCategories(){
    return this._http.get('https://fakestoreapi.com/products/categories');
  }

  getprivatecategory(keyword:string){
    return this._http.get("https://fakestoreapi.com/products/category/" + keyword);
  }
getproductbyid(id:any){
return this._http.get("https://fakestoreapi.com/products/"+id);
}

  public exportExeclService(json:any ,excelFilename:string):void{


    const Worksheet:XLSX.WorkSheet=XLSX.utils.json_to_sheet(json);
    const workbook:XLSX.WorkBook={Sheets:{'data':Worksheet},SheetNames:['data']};
    const excel_Buffer:any=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
    this.SaveASExcelFile(excel_Buffer,excelFilename);
  }

  private  SaveASExcelFile(buffer:any,filename:string):void{
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
  const data:Blob=new Blob([buffer],{type:EXCEL_TYPE});
  FileSaver.saveAs(data,filename+EXCEL_EXTENSION)


    }

}

