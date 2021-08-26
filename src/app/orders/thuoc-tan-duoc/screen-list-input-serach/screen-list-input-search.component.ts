import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-screen-list-input-search',
  templateUrl: './screen-list-input-search.component.html',
  styleUrls: ['./screen-list-input-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenListInputComponent implements OnInit {
  value = 'Clear me';

  @Output() applyFilterEventEmitter = new EventEmitter<string>();
  @Input() filterListForm?: FormGroup;

  get inputFilterList(): string {
    return this.filterListForm.get('inputFilterList')?.value;
  }
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.filterListForm = this.fb.group({
      inputFilterList: ''
    });
  }
  applyFilter(value: string): void {
    this.applyFilterEventEmitter.emit(value);
  }
}
