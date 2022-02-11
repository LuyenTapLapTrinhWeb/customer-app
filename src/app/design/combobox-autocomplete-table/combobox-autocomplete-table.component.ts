import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-combobox-autocomplete-table',
  templateUrl: './combobox-autocomplete-table.component.html',
  styleUrls: ['./combobox-autocomplete-table.component.scss']
})
export class ComboboxAutocompleteTableComponent implements OnInit {
  title = 'Angular Material Select Infinite Scroll';
  total = 100;
  data = Array.from({ length: this.total }).map((_, i) => `Option ${i}`);
  limit = 10;
  offset = 0;
  options = new BehaviorSubject<string[]>([]);
  options$: Observable<string[]>;

  constructor() {
    this.options$ = this.options.asObservable().pipe(
      scan((acc, curr) => {
        return [...acc, ...curr];
      }, [])
    );
  }

  ngOnInit(): void {
    this.getNextBatch();
  }

  getNextBatch(): void {
    const result = this.data.slice(this.offset, this.offset + this.limit);
    this.options.next(result);
    this.offset += this.limit;
  }
}
