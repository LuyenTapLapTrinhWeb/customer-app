import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/operators';
import { State, STATES } from './state';

@Component({
  selector: 'app-combobox-autocomplete-table',
  templateUrl: './combobox-autocomplete-table.component.html',
  styleUrls: ['./combobox-autocomplete-table.component.scss']
})
export class ComboboxAutocompleteTableComponent implements OnInit {
  /* default all data */
  states: State[] = STATES;
  /* new control */
  selectCtrl = new FormControl(this.states);
  inputCtrl = new FormControl();
  /* new form */
  myForm: FormGroup;
  public filteredList5 = this.states.slice();
  /* default one data */
  selectedData: State = {
    id: 1, flag: 'us',
    name: 'my', population: '2m4'
  };
  filteredOptions: Observable<State[]>;

  constructor(private builder: FormBuilder) {
    this.myForm = this.builder.group({
      select: this.selectCtrl,
      input: this.inputCtrl
    });
  }

  ngOnInit(): void {
    this.filteredOptions = this.myForm.get('select').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  selectedValue(event: MatSelectChange): void {
    console.log(event.source, event.value);
    /* change data */
    this.selectedData = { id: event.value.id, flag: event.value.flag, name: event.value.name, population: event.value.population };
    console.log(this.selectedData);
  }
  private _filter(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
