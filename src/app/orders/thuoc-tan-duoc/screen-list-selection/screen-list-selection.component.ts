import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SCREENLISTGUIDESELECTION } from '../screen-list-guide/screen-list-guide.data';
import { ScreenListGuideSelection } from '../screen-list-guide/screen-list-guide.interface';
import { SelectionList } from './selection-list.interface';
import { SelectionOptionList } from './selection-option.interface';

@Component({
  selector: 'app-screen-list-selection',
  templateUrl: './screen-list-selection.component.html',
  styleUrls: ['./screen-list-selection.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenListSearchSelectionComponent implements OnInit {
  selectionTitle!: string;
  selectionList!: SelectionList[];
  selectionError!: string;
  screenListGuideSelection!: ScreenListGuideSelection;
  @Input() selectionOptionList!: SelectionOptionList;
  @Output() selectionOptionByEventEmitter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    if (!this.selectionOptionList) {
      this.screenListGuideSelection = SCREENLISTGUIDESELECTION;
      return;
    }
    this.selectionList = this.selectionOptionList.list ? this.selectionOptionList.list : [
      { value: '1', viewValue: 'Steak' },
      { value: '2', viewValue: 'Pizza' },
      { value: '3', viewValue: 'Tacos' }
    ];
    this.selectionTitle = this.selectionOptionList.title ? this.selectionOptionList.title : 'Vui lòng nhập tiêu đề';
    this.selectionError = this.selectionOptionList.selectionError ? this.selectionOptionList.selectionError : '1';
  }
  selectionOptionBy(selectOptionBy: any): void {
    this.selectionOptionByEventEmitter.emit(selectOptionBy);
  }
}
