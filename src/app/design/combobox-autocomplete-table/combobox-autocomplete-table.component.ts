import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, Observable } from 'rxjs';
import { State, STATES } from './state';

@Component({
  selector: 'app-combobox-autocomplete-table',
  templateUrl: './combobox-autocomplete-table.component.html',
  styleUrls: ['./combobox-autocomplete-table.component.scss']
})
export class ComboboxAutocompleteTableComponent implements OnInit {
  /* infinite scroll */
  title = 'Angular Material Select Infinite Scroll';
  total = 100;
  data = Array.from({ length: this.total }).map((_, i) => `Option ${i}`);
  limit = 10;
  offset = 0;
  options = new BehaviorSubject<string[]>([]);
  options$: Observable<string[]>;

  /* default all data */
  states: State[] = STATES;
  /* new control */
  stateCtrl = new FormControl(this.states);
  /* new form */
  myForm: FormGroup;
  public filteredList5 = this.states.slice();
  /* default one data */
  selectedData: State = {
    id: 1, flag: 'us',
    name: 'my', population: '2m4'
  };

  constructor(private builder: FormBuilder) {
    this.myForm = this.builder.group({
      frequency: this.stateCtrl
    });
  }

  ngOnInit(): void {
  }

  selectedValue(event: MatSelectChange): void {
    console.log(event.source, event.value);
    /* change data */
    this.selectedData = { id: event.value.id, flag: event.value.flag, name: event.value.name, population: event.value.population };
    console.log(this.selectedData);
  }
  compareFn(c1: State, c2: State): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  getNextBatch(): void {
    const result = this.data.slice(this.offset, this.offset + this.limit);
    this.options.next(result);
    this.offset += this.limit;
  }
}
