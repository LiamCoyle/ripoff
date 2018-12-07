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
export class UserService {

  constructor(private http:HttpClient) {}

  getUsers() : Observable<any>{
    console.log(this.http.get(endPoint+'user'));
    return this.http.get(endPoint+'user');
  }

  createUser(input) : Observable<any>{
    return this.http.post(endPoint+'user', input);
  }

  

}
