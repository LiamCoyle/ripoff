import { Injectable } from '@angular/core';
import { User } from './user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const endpoint = 'http://localhost:8080/api/';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers() : Observable<any>{
    return this.http.get(endpoint+'users');
  }
}


