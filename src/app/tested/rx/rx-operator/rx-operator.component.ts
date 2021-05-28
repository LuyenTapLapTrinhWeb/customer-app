import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  items: CategoriesOperators[];
  url: string;
  constructor() { }

  ngOnInit(): void {
    this.state = 'inactive';
    const BASE_URL = 'http://localhost:3000/';
    this.url = BASE_URL + 'images/rxjs/';
    const items$ = of(CATEGORIESOPERATORS).pipe(
      tap(data => console.log(data)),
      map(items => items.map((item: CategoriesOperators) => { item.svg = this.url + item.svg + '.png'; return item; }))
    );
    items$.subscribe(items => { this.items = items; this.state = 'active'; });
  }

}
