import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './IProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7293/api/Product';
  constructor(private http:HttpClient) { }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  postProduct(product:IProduct):Observable<any>{
    return this.http.post(this.apiUrl,product)
  }
  deleteProduct(productId:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+"?id="+productId);
  }
}
