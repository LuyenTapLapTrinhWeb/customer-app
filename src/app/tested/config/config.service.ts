import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { handleError } from 'src/app/handleError/handleError';
import { Config } from './configUrl';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getConfigs() {
    return this.http.get<Config[]>(this.configUrl + 'configUrl').pipe(retry(3), catchError(handleError));
  }
  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' }).pipe(catchError(handleError));
  }
}
