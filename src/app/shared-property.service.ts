import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedPropertyService {
  private _pizzaObj!:any;

  set rowName(selectedTableRowData:any){
    this._pizzaObj = selectedTableRowData;
  }

  get rowName():object{
    return this._pizzaObj;
  }
}
