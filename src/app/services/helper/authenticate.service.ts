import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import * as jwt_decode from "jwt-decode";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const endPoint = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _userSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient, private userService : UserService) {
    this._userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentToken')));
  }

  public get currentUserValue(): any {
      return this._userSubject.value;
  }

  public get currentUserSubject(): any {
    return this._userSubject;
}

  public login(mail : string, password : string) : Observable<any>{
    var obj = {'mail': mail, 'password': password};
    return this.http.post(endPoint+'authenticate',obj)
    .pipe(map(token  => {
      console.log("login token", token);
      // login successful if there's a jwt token in the response
      if (token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentToken', JSON.stringify(token));
          this._userSubject.next(token);
          //this.currentUser = JSON.stringify(user);
      }

      return token;
    }));
  }

  public logout(){
    this._userSubject.next(null);
    localStorage.removeItem('currentToken');
  }
}
