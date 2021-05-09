import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viewchildrend } from './detailviewchildren';

@Injectable({
  providedIn: 'root'
})
export class DetailviewchildService {

  constructor(private http: HttpClient) { }
  getViewchild(id: number): Observable<Viewchildrend> {
    const baseURl = 'http://localhost:3000/';
    const url = baseURl + 'viewchildandviewchildren/';
    return this.http.get<Viewchildrend>(url + id);
  }
}
