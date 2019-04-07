import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PermitService {

  uri = 'http://localhost:3000/permit';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  addPermit(permitData) {
    console.log(permitData);
    return this.http.post(`${this.uri}`, permitData, httpOptions)
      // .pipe(catchError(this.handleError)
    // );
  }

  getAllPermits(): Observable<any> {
    console.log("inside get all permits...");
    return this.http.get(`${this.uri}`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

}
