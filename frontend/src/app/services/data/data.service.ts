import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Feedback } from 'src/app/models/feedback';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any;

  private feedbackCollection: AngularFirestoreCollection<Feedback>;
  feedbacks: Observable<Feedback[]>;

  constructor(
    private http: HttpClient,
    private readonly afs: AngularFirestore
  ) {
    this.feedbackCollection = afs.collection<Feedback>('feedbacks');
  }
  getPackage(packageName: string): Observable<any> {
    return this.http.get('https://registry.npmjs.org/' + packageName).pipe(
      tap(response => console.log(response)),
      catchError(this.handleError('getPackage', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
