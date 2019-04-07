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
export class CategoryService {

  constructor(private http:HttpClient) {}


  getCategories() : Observable<any>{
    return this.http.get(endPoint+'category');
  }

  createCategory(input) : Observable<any>{
    return this.http.post(endPoint+'category', input);
  }

  updateCategory(input) : Observable<any>{
    return this.http.put(endPoint+'category', input);
  }

  deleteCategory(input) : Observable<any>{
    return this.http.delete(endPoint+'category', input);
  }
}
