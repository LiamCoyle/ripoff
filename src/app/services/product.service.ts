import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const endPoint = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  getProducts() : Observable<any>{
    console.log(this.http.get(endPoint+'product'));
    return this.http.get(endPoint+'product');
  }

  createProduct(input) : Observable<any>{
    return this.http.post(endPoint+'product', input);
  }

  updateProduct(input) : Observable<any>{
    return this.http.put(endPoint+'product', input);
  }

  deleteProduct(input) : Observable<any>{
    return this.http.delete(endPoint+'product', input);
  }


}
