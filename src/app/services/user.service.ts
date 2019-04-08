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
export class UserService {

  constructor(private http:HttpClient) {}

  getUsers() : Observable<any>{
    return this.http.get(endPoint+'user');
  }

  getUser(id) : Observable<any>{
    return this.http.get(endPoint+'user/'+id);
  }

  createUser(input) : Observable<any>{
    return this.http.post(endPoint+'user', input);
  }

  updateUser(id, input) : Observable<any>{
    return this.http.put(endPoint+'user/'+id, input);
  }

  deleteUser(input) : Observable<any>{
    return this.http.delete(endPoint+'user', input);
  }


}
