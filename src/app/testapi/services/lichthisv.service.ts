import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
  /* GET heroes whose name contains search term */
  searchLichThiSV(term: string): Observable<LichThiSV[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<LichThiSV[]>(`${this.baseUrl}lichthisv/?bmssv=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found Student matching "${term}"`) :
        this.log(`no Student matching "${term}"`)),
      catchError(this.handleError<LichThiSV[]>('searchLichThiSV', []))
    );
  }
  getLichThiSVByBMSSV(bmssv?: string): Observable<LichThiSV[]> {
    this.url = this.baseUrl + 'lichthisv/?bmssv=';
    return this.http.get<LichThiSV[]>(this.url + bmssv).pipe(
      tap(data => { console.log(data); }),
      catchError(this.handleError<LichThiSV[]>(`getLichThiSVByBMSSV`))
    );
  }
  getLichThiCondition(bmssv: string, nhhk: string): Observable<LichThiSV[]> {
    if (!bmssv && nhhk === undefined) {
      return this.getLichThiSV();
    }
    if (bmssv) {
      return this.getLichThiSVByBMSSV(bmssv);
    }
    if (nhhk) {
      const nnhkdetail$ = this.http.get<LichThiSV[]>(this.baseUrl + `lichthisv/?nhhk=${nhhk}`);
      const nhhklist$ = this.http.get<Nhhk[]>(this.baseUrl + `nhhklichthisv/?nhhk=${nhhk}`);
      return combineLatest([nhhklist$, nnhkdetail$])
        .pipe(
          map(([nhhklist, lichthisvs]) =>
            lichthisvs.map(lichthisv => ({
              ...lichthisv,
              nhhk: nhhklist.find(nnhk => lichthisv.nhhk === nnhk.nhhk).ten_nhhk
            }) as LichThiSV)
          )
        );
    }
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
  getNhhkLichSVBynhhk(nhhk: string): Observable<Nhhk> {
    // this.url = 'http://edusoft.net.vn:8080/TestAPI/aq/nhhklichthisv';
    this.url = this.baseUrl + `nhhklichthisv/?nhhk=${nhhk}`;
    return this.http.get<Nhhk>(this.url).pipe(
      tap(data => { console.log(data); }),
      catchError(this.handleError<Nhhk>(`getNhhkLichSV`))
    );
  }
  getLichSVTenNhhk(): Observable<LichThiSV[]> {
    const nhhks$ = this.getNhhkLichSV();
    const lichsvs$ = this.getLichThiSV();
    return combineLatest([nhhks$, lichsvs$])
      .pipe(
        map(([nhhks, lichsvs]) =>
          lichsvs.map(lichsv => ({
            ...lichsv,
            nhhk: nhhks.find(c => lichsv.nhhk === c.nhhk).ten_nhhk
          }) as LichThiSV)
        )
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
