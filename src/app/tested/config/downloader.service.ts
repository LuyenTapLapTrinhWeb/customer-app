import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {
  configUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(this.configUrl + filename, { responseType: 'text' })
      .pipe(
        tap( // Log the result or error
          data => this.log(filename, data),
          error => this.logError(filename, error)
        )
      );
  }
  // tslint:disable-next-line:typedef
  log(filename: string, data: any) {
    console.log(filename, data);
    return data;
  }
  // tslint:disable-next-line:typedef
  logError(filename: string, error: any) {
    console.error(filename, error);
    return error;
  }
}
