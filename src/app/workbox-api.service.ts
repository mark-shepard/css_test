import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkboxApiService {

  //private properties
  private baseUrl = "http://localhost:4200";
  private mockUrl = "http://localhost:3000";

  constructor( private httpClient: HttpClient ) { }

  public getAnnouncements(): Observable<any> {
    const getParams = new HttpParams();
    return this.sendGetRequest( "announcements/list", getParams );

  }

  //wrappers go here --<

  private sendGetRequest( method: String, info: HttpParams ): Observable<any> {
    return this.httpClient.get<any>( this.baseUrl+ '/' + method, { params: info } );
  }
}
