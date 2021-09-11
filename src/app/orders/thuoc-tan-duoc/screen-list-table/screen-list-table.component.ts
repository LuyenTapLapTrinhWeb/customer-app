import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/testapi/aq/lichthisv/lichthisv.component';
import { Actions, ActionsElement } from './screen-list-table-reuseable/table-reuseable-columns.interface';
import { matMenu, matMenuItem, matMenuItemMatIcon } from './edit-button.css';
@Component({
  selector: 'app-screen-list-table',
  templateUrl: './screen-list-table.component.html',
  styleUrls: ['./screen-list-table.component.scss'],
})
export class ScreenListTableComponent implements OnInit, AfterViewInit {
  matMenu: any;
  matMenuItem: any;
  matMenuItemMatIcon: any;
  // We will need this getter to exctract keys from tableCols
  // tslint:disable-next-line:typedef
  get keys() { return this.tableCols.map(({ key }) => key); }

  // tslint:disable-next-line:no-input-rename
  @Input() dataSource: MatTableDataSource<any>;
  // tslint:disable-next-line:no-input-rename
  @Input('cols') tableCols = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selection = new SelectionModel<PeriodicElement>(true, []);


  // tslint:disable-next-line:no-output-rename
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<PeriodicElement>();
  // tslint:disable-next-line:no-output-rename
  @Output('onAction') actionEventEmitter = new EventEmitter<ActionsElement>();

  constructor() {
  }
  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt, column): void {
    return column.config.values[`${elt[column.key]}`];
  }
  ngOnInit(): void {
    // tslint:disable-next-line:quotemark
    this.matMenu = matMenu;
    this.matMenuItem = matMenuItem;
    this.matMenuItemMatIcon = matMenuItemMatIcon;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onSelectedRow(selectedRow: PeriodicElement): void {
    this.dataSource.data.forEach(rows => {
      if (selectedRow === rows) {
        this.selection.clear();
        this.selection.toggle(selectedRow);
      } else {
        this.outSelectedRow.emit(selectedRow);
      }
    });
  }
  onActionHandler(elements, actions): void {
    const actionElement: ActionsElement = { elementdata: elements, action: actions };
    this.actionEventEmitter.emit(actionElement);
  }
}
