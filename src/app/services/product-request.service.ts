import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { audit, Observable, ObservableInput } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {

  constructor(private httprequest: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httprequest.get('https://dummyjson.com/products', {
      params: {
      
      },
      headers: {
        Authorization: 'ACCESS_TOKEN'
      }


    });

  }
 getProductDetails(id: number): Observable<any> {
      return this.httprequest.get(`https://dummyjson.com/products/${id}`)}


  addProduct(product: any): Observable<any> {
    return this.httprequest.post('https://dummyjson.com/products/add', product)}
         
}