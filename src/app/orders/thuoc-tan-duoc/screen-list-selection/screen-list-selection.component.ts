import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SCREENLISTGUIDESELECTION, ScreenListGuideSelection } from '../screen-list-guide/screen-list-guide.interface';
import { SelectionList } from './selection-list.interface';
import { SelectionOptionList } from './selection-option.interface';

@Component({
  selector: 'app-screen-list-selection',
  templateUrl: './screen-list-selection.component.html',
  styleUrls: ['./screen-list-selection.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenListSearchSelectionComponent implements AfterViewInit {
  selectionTitle!: string;
  selectionList!: SelectionList[];
  selectionError!: string;
  screenListGuideSelection!: ScreenListGuideSelection;
  @Input() selectionOptionList: SelectionOptionList;
  @Output() selectOptionByChangeEventEmitter = new EventEmitter<any>();
  constructor() { }

  ngAfterViewInit(): void {
    if (!this.selectionOptionList) {
      this.screenListGuideSelection = SCREENLISTGUIDESELECTION;
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
