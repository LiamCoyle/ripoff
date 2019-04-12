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
export class AlerteService {

  constructor(private http:HttpClient) {}


  getAlertes() : Observable<any>{
    return this.http.get(endPoint+'alerte');
  }

  getAlertesForUser(input) : Observable<any>{
    console.log("alerte service ", input);
    return this.http.get(endPoint+'alerte/'+input.id);
  }

  createAlerte(input) : Observable<any>{
    return this.http.post(endPoint+'alerte', input);
  }

  updateAlerte(input) : Observable<any>{
    return this.http.put(endPoint+'alerte', input);
  }

  deleteAlerte(input) : Observable<any>{
    return this.http.delete(endPoint+'alerte/'+input.id);
  }


}
