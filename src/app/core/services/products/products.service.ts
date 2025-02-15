import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _HttpClient = inject(HttpClient);

  constructor() { }

  getProducts():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products');
  }

  getSpecificProduct(pId:string):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${pId}`)
  }
}
