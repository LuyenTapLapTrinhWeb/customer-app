import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActionsEvent, ActionsElement } from 'src/app/design/screen-list-table/screen-list-table-config.interface';
import { AlertService } from 'src/app/services/HeThong/alert.service';
import { SCREENLISTGUIDETABLE } from '../screen-list-guide/screen-list-guide.data';
import { ScreenListGuideTable } from '../screen-list-guide/screen-list-guide.interface';
import { matMenu, matMenuItem, matMenuItemMatIcon } from './screen-list-table.edit-button.scss';

@Component({
  selector: 'app-screen-list-table',
  templateUrl: './screen-list-table.component.html',
  styleUrls: [
    './screen-list-table.component.scss',
    './screen-list-table.sticky-header.scss',
    './screen-list-table.hightlighted.scss',
    './screen-list-table.paginator.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ScreenListTableComponent implements OnInit, AfterViewInit {

  matMenu: any;
  matMenuItem: any;
  matMenuItemMatIcon: any;
  selection = new SelectionModel<any>(true, []);

  // We will need this getter to exctract keys from tableCols
  // tslint:disable-next-line:typedef
  get keys() { return this.tableCols.map(({ key }) => key); }
  screenListGuideTable!: ScreenListGuideTable;
  // tslint:disable-next-line:no-input-rename
  @Input('cols') tableCols = [];


  @Input() selectedRow!: any;
  @Input() inputFilterList!: string;
  @Input() paginatorLabel!: string;
  @Input() totalItems!: number;
  @Input() pageSize!: number;
  @Input() pageIndex!: number;
  @Input() pageSizeOptions!: string[];
  @Input() newElementData: any[] = [];
  @Input() newDataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // tslint:disable-next-line:no-output-rename
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-rename
  @Output('onAction') actionEventEmitter = new EventEmitter<ActionsElement>();

  @Output() pageEventEmitter = new EventEmitter<any>();


  constructor(
    public dialog: MatDialog,
    public alertService: AlertService) { }
  ngOnInit(): void {
    if (!(this.newDataSource && this.tableCols)) {
      this.screenListGuideTable = SCREENLISTGUIDETABLE;
      return;
    }
    this.refresh();
  }
  // tslint:disable-next-line:typedef
  refresh() {
    this.matMenu = matMenu;
    this.matMenuItem = matMenuItem;
    this.matMenuItemMatIcon = matMenuItemMatIcon;
    this.selection.changed.subscribe(selectedRow => {
      this.selectedRow = selectedRow.added[0];
    });
  }
  ngAfterViewInit(): void {
    if (this.newDataSource) {
      this.newDataSource.paginator = this.paginator;
      this.newDataSource.sort = this.sort;
    }
  }
  onSelectedRow(selectedRow: any): void {
    this.selection.clear();
    this.selection.toggle(selectedRow);
    this.outSelectedRow.emit(selectedRow);
  }
  emitPaginationPage(page: any): void {
    this.pageEventEmitter.emit(page);
  }
  onActionHandler(elements: any, actionsEvent: ActionsEvent, mouseEvent?: MouseEvent): void {
    if (mouseEvent && mouseEvent.type === 'dblclick') {
      actionsEvent = {
        active: true,
        id: 1,
        mouseClickEvent: mouseEvent,
        mouseClickMode: 'editing',
        svgIcon: 'edit-pencil',
        tooltip: 'Sửa',
      };
    }
    const actionElement: ActionsElement = { elementdata: elements, action: actionsEvent, };
    this.actionEventEmitter.emit(actionElement);
  }
  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt: any, column: any): any {
    return column.config.values[`${elt[column.key]}`];
  }
  showBooleanChildren(element: any, column: any): any {
    let result = '';
    for (const key of column.config.children) {
      result += element[key] ? `${element[key] ? element[key] : ''}/` : `${element[key] ?
        element[key] : ''}/`.substring(0, result.length - 1);
    }
    // console.log('date', result.substring(0, result.length - 1));
    // console.log('time', new Date(result.substring(0, result.length - 1)).getTime());
    // return new Date(result.substring(0, result.length - 1)).getTime();
    return result.substring(0, result.length - 1);
  }
  showBooleanSVGIcon(element: any, column: any): any {
    return column.config.values[`${this.showBooleanChildren(element, column)}`];
  }
}
