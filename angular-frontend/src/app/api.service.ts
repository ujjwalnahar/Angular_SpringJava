import {catchError, retry} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Smartphone } from './smartphone';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const localUrl = 'assets/data/smartphone.json';
const apiUrl = 'http://localhost:8080/greeting';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Simple GET data
  // getSmartphone() {
  //   return this.http.get(localUrl);
  // }

  // GET data as a type
  // getSmartphone(): Observable<HttpResponse<Smartphone[]>> {
  //   return this.http.get<Smartphone[]>(
  //     localUrl, { observe: 'response' });
  // }

  // GET data with error handler
  // getSmartphone(): Observable<any> {
  //   httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
  //   return this.http.get<Smartphone[]>(localUrl, httpOptions).pipe(
  //     retry(3), catchError(this.handleError<Smartphone[]>('getSmartphone', [])));
  // }

  getGreeting():Observable<any>{
    return this.http.get("http://localhost:8080/greeting");
  }
 
  private log(message: string) {
    console.log(message);
  }
}
