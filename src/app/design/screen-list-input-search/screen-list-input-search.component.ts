import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SCREENLISTGUIDEINPUTSEARCH } from '../screen-list-guide/screen-list-guide.data';
import { ScreenListGuideInputSearch } from '../screen-list-guide/screen-list-guide.interface';
import { ScreenListInputSearch } from './screen-list-input.interface';

@Component({
  selector: 'app-screen-list-input-search',
  templateUrl: './screen-list-input-search.component.html',
  styleUrls: ['./screen-list-input-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenListInputSearchComponent implements OnInit {

  @Input() screenListInputSearch!: ScreenListInputSearch;
  @Input() filterListForm!: FormGroup;

  @Output() screenListInputSearchEventEmitter = new EventEmitter<string>();
  fieldInputID!: number;
  fieldInputName!: string;
  fieldInputPlaceholder!: string;
  formControlName!: string;
  value = '';
  screenListGuideInputSearch!: ScreenListGuideInputSearch;
  constructor(private fb: FormBuilder) { }
  noiDungTimKiem!: string;
  valueFilterList = '';
  private noiDungTimKiem$: Subject<string> = new Subject();
  ngOnInit(): void {
    if (!this.screenListInputSearch) {
      this.screenListGuideInputSearch = SCREENLISTGUIDEINPUTSEARCH;
      return;
    }
    this.noiDungTimKiem$.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((result: any) => {
      if (result) {
        this.noiDungTimKiem = result;
        console.log(this.noiDungTimKiem);
      } else {
        this.noiDungTimKiem = '';
        console.log('clear!');
      }
    });
    this.fieldInputID = this.screenListInputSearch.id ? this.screenListInputSearch.id : 1;
    this.fieldInputName = this.screenListInputSearch.title ? this.screenListInputSearch.title : '';
    this.fieldInputPlaceholder = this.screenListInputSearch.placeholder ? this.screenListInputSearch.placeholder : 'Vui lòng nhập tiêu đề';
  }
  timKiem(): void {
    this.screenListInputSearchEventEmitter.emit(this.noiDungTimKiem);
  }
}
