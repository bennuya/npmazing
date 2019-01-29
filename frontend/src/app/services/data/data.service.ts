import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json', 
    'Access-Control-Allow-Origin': '*' 
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any;

  constructor(
    private http: HttpClient
  ) { }

  getPackage(packageName: string): Observable<any> {
    return this.http.get('https://registry.npmjs.org/' + packageName).pipe(
      tap(response => console.log(response)),
      catchError(this.handleError('getPackage', []))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
