import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';
import { CATEGORIESOPERATORS, CategoriesOperators } from './categoriesOperators';

@Component({
  selector: 'app-rx-operator',
  templateUrl: './rx-operator.component.html',
  styleUrls: ['./rx-operator.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class RxOperatorComponent implements OnInit {
  state: string;
  url: string;
  BASEURL: string;
  items: CategoriesOperators[];
  constructor() { }

  ngOnInit(): void {
    this.BASEURL = 'http://localhost:3000/';
    this.url = this.BASEURL + 'images/rxjs/';
    this.state = 'inactive';
    of(CATEGORIESOPERATORS).pipe(
      tap(data => console.log(data)),
      map(items => items.map((item: CategoriesOperators) => {
        item.svgUrl = '';
        item.svgUrl = this.url + item.svg + '.png';
        return item;
      })),
      catchError(error => throwError(error.message))
    ).subscribe(
      (items: CategoriesOperators[]) => {
        this.items = items;
        this.state = 'active';
      },
      error => console.error(error)
    );
  }
}
