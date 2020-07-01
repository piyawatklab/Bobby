import { Injectable } from '@angular/core';
// import {IProducts} from './products/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url:string = 'http://localhost:8080/products';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<any[]>{
    return this._http.get<any[]>(this.url);
  }
}
