import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';



const endPoint = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http:HttpClient) {}

  getSites() : Observable<any>{
    return this.http.get(endPoint+'site');
  }

  createSite(input) : Observable<any>{
    return this.http.post(endPoint+'site', input);
  }

  updateSite(input) : Observable<any>{
    return this.http.put(endPoint+'site', input);
  }

  deleteSite(input) : Observable<any>{
    return this.http.delete(endPoint+'site', input);
  }

}
