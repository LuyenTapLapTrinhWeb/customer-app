import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { TableReuseableData } from '../screen-list-table-reuseable-guide/table-reuseable.data';
import { State, STATES } from './state';

@Component({
  selector: 'app-combobox-autocomplete-table',
  templateUrl: './combobox-autocomplete-table.component.html',
  styleUrls: ['./combobox-autocomplete-table.component.scss']
})
export class ComboboxAutocompleteTableComponent implements OnInit {
  states: State[] = STATES;
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  cols: TableReuseableData[];
  dataSource: any;
  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
    this.dataSource.filter = this.filteredStates;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }
  onActionHandler(action: Event): void {

  }
}
