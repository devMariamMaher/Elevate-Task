import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _HttpClient = inject(HttpClient);

  constructor() { }

  getProducts():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/products`);
  }

  getSpecificProduct(pId:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/products/${pId}`)
  }

  getRelatedProduct(categ:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/products?${categ}`)
  }
}
