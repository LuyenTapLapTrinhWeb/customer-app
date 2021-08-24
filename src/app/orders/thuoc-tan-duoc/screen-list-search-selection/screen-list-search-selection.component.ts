import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SelectionList } from './selection-list.interface';
import { SelectionOptionList } from './selection-option.interface';

@Component({
  selector: 'app-screen-list-search-selection',
  templateUrl: './screen-list-search-selection.component.html',
  styleUrls: ['./screen-list-search-selection.component.scss', '../screen-list-service/screen-list.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenListSearchComboboxComponent implements AfterViewInit {
  selectionTitle: string;
  selectionList: SelectionList[];
  selectionError: string;
  codeExample = '<app-screen-list-search-selection [selectionOptionList]="selectionOptionList"></app-screen-list-search-selection>';
  @Input() selectionOptionList: SelectionOptionList;
  @Output() selectOptionByChangeEventEmitter = new EventEmitter<any>();
  constructor() { }

  ngAfterViewInit(): void {
    if (!this.selectionOptionList) {
      return;
    }
    this.selectionList = this.selectionOptionList.list ? this.selectionOptionList.list : [
      { value: 'steak-0', viewValue: 'Steak' },
      { value: 'pizza-1', viewValue: 'Pizza' },
      { value: 'tacos-2', viewValue: 'Tacos' }
    ];
    this.selectionTitle = this.selectionOptionList.title ? this.selectionOptionList.title : 'vui lòng nhập tiêu đề';
  }
  selectionOptionBy(selectOptionBy: any): void {
    this.selectOptionByChangeEventEmitter.emit(selectOptionBy);
  }
}
