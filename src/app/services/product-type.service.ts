import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const endPoint = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(private http:HttpClient) {}


  getProductTypes() : Observable<any>{
    return this.http.get(endPoint+'productType');
  }

  getProductTypesForCategory(idCategory) : Observable<any>{
    return this.http.get(endPoint+'productType/category/'+idCategory);
  }

  createProductType(input) : Observable<any>{
    return this.http.post(endPoint+'productType', input);
  }

  updateProductType(input) : Observable<any>{
    return this.http.put(endPoint+'productType', input);
  }

  deleteProductType(input) : Observable<any>{
    return this.http.delete(endPoint+'productType', input);
  }
}
