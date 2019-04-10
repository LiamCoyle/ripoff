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
export class BrandService {

  constructor(private http:HttpClient) {}


  getBrands() : Observable<any>{
    return this.http.get(endPoint+'brand');
  }

  getBrand(idBrand): Observable<any>{
    return this.http.get(endPoint+'brand/'+idBrand);
  }

  createBrand(input) : Observable<any>{
    return this.http.post(endPoint+'brand', input);
  }

  updateBrand(input) : Observable<any>{
    return this.http.put(endPoint+'brand', input);
  }

  deleteBrand(input) : Observable<any>{
    return this.http.delete(endPoint+'brand', input);
  }


}
