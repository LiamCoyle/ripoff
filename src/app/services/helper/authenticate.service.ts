import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const endPoint = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  public getCurrentUser()  {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  private deleteCurrentUser(){
    localStorage.removeItem('currentUser');
  }

  constructor(private http:HttpClient) {}

  public loginUser(mail : string, password : string) : Observable<any>{
    var obj = {'mail': mail, 'password': password};
    return this.http.post(endPoint+'authenticate',obj)
    .pipe(map(user => {
      console.log(user);
      // login successful if there's a jwt token in the response
      if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(user);
          //this.currentUser = JSON.stringify(user);
      }

      return user;
    }));
  }

  public logoutUser(){
    this.deleteCurrentUser();
  }
}
