import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/app/handleError/handleError';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesUrl: string;

  constructor(private http: HttpClient) { }
  /** POST: add a new hero to the database */
  // tslint:disable-next-line:typedef
  addHero(hero: Hero) {
    this.heroesUrl = 'https://localhost:3000';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post(this.heroesUrl, hero, httpOptions);

  }
}
