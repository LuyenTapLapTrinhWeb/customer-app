import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AnhQuan } from '../model/anhquan';
import { LichThiSV } from '../model/lichthisv';
import { Nhhk } from '../model/nhhk';

@Injectable({
  providedIn: 'root'
})
export class LichthisvService {
  url: string;
  baseUrl: string;

  constructor(private http: HttpClient) { this.baseUrl = 'http://localhost:3000/'; }
  getLichThiSV(): Observable<LichThiSV[]> {
    // this.url = 'http://edusoft.net.vn:8080/TestAPI/aq/lichthisv/%7bmssv:%22BA20EX003%22,nhhk:%2220201%22%7d';
    this.url = this.baseUrl + 'lichthisv';
    return this.http.get<LichThiSV[]>(this.url).pipe(
      tap(data => { console.log(data); }),
      catchError(this.handleError<LichThiSV[]>(`getLichThiSV`))
    );
  }
  getLichThiSVByBMSSV(bmssv?: string): Observable<LichThiSV[]> {
    this.url = this.baseUrl + 'lichthisv/?bmssv=';
    return this.http.get<LichThiSV[]>(this.url + bmssv).pipe(
      tap(data => { console.log(data); }),
      catchError(this.handleError<LichThiSV[]>(`getLichThiSVByBMSSV`))
    );
  }
  getAnhQuans(): Observable<AnhQuan[]> {
    this.url = this.baseUrl + 'anhquan';
    return this.http.get<AnhQuan[]>(this.url).pipe(
      tap(data => { console.log(data); }),
      catchError(this.handleError<AnhQuan[]>(`getAnhQuans`))
    );
  }
  getNhhkLichSV(): Observable<Nhhk[]> {
    // this.url = 'http://edusoft.net.vn:8080/TestAPI/aq/nhhklichthisv';
    this.url = this.baseUrl + 'nhhklichthisv';
    return this.http.get<Nhhk[]>(this.url).pipe(
      tap(data => { console.log(data); }),
      catchError(this.handleError<Nhhk[]>(`getNhhkLichSV`))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // tslint:disable-next-line:typedef
  log(log: string) {
    throw new Error(log);
  }
}