import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-reuseable',
  templateUrl: './table-reuseable.component.html',
  styleUrls: ['./table-reuseable.component.scss']
})
export class TableReuseableComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('onAction') emitter = new EventEmitter();
  // tslint:disable-next-line:no-input-rename
  @Input('data') dataSource = [];
  // tslint:disable-next-line:no-input-rename
  @Input('cols') tableCols = [];
  // We will need this getter to exctract keys from tableCols
  // tslint:disable-next-line:typedef
  get keys() { return this.tableCols.map(({ key }) => key); }
  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt, column): void {
    return column.config.values[`${elt[column.key]}`];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
