import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActionsEvent, ActionsElement } from 'src/app/design/screen-list-table/screen-list-table-config.interface';
import { AlertService } from 'src/app/services/HeThong/alert.service';
import { matMenu, matMenuItem, matMenuItemMatIcon } from './screen-list-table.edit-button.scss';

@Component({
  selector: 'app-screen-list-table-guide',
  templateUrl: './screen-list-table.component.html',
  styleUrls: ['./screen-list-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScreenListTableGuideComponent implements OnInit, AfterViewInit {

  matMenu: any;
  matMenuItem: any;
  matMenuItemMatIcon: any;

  selection = new SelectionModel<any>(true, []);

  // We will need this getter to exctract keys from tableCols
  // tslint:disable-next-line:typedef
  get keys() { return this.tableCols.map(({ key }) => key); }

  @Input() dataSource!: MatTableDataSource<any>;
  // tslint:disable-next-line:no-input-rename
  @Input('cols') tableCols = [];


  @Input() selectedRow!: any;
  @Input() inputFilterList!: string;
  @Input() totalItems!: number;
  @Input() newElementData: any[] = [];
  @Input() newDataSource = new MatTableDataSource<any>(this.newElementData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output() outSelectedRow = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-rename
  @Output('onAction') actionEventEmitter = new EventEmitter<ActionsElement>();

  @Output() suaBanGhiEventEmitter = new EventEmitter<any>();
  @Output() xoaBanGhiEventEmitter = new EventEmitter<any>();


  constructor(
    public dialog: MatDialog,
    public alertService: AlertService) { }
  async ngOnInit(): Promise<void> {
    // tslint:disable-next-line:quotemark
    await this.refresh();
  }
  // tslint:disable-next-line:typedef
  refresh() {
    this.matMenu = matMenu;
    this.matMenuItem = matMenuItem;
    this.matMenuItemMatIcon = matMenuItemMatIcon;
    if (this.newDataSource) {
      this.newDataSource.data = this.newElementData;
      this.dataSource = this.newDataSource;
    } else {
      this.dataSource.data = this.newElementData;
    }
    this.selection.changed.subscribe(s => {
      this.selectedRow = s.added[0];
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onSelectedRow(selectedRow: any): void {
    this.selection.clear();
    this.selection.toggle(selectedRow);
    this.outSelectedRow.emit(selectedRow);
  }
  suaBanGhi(selectedRow: any): void {
    this.suaBanGhiEventEmitter.emit(selectedRow);
  }
  xoaBanGhi(selectedRow: any): void {
    this.xoaBanGhiEventEmitter.emit(selectedRow);
  }
  onActionHandler(elements: any, actions: ActionsEvent): void {
    const actionElement: ActionsElement = { elementdata: elements, action: actions };
    this.actionEventEmitter.emit(actionElement);
  }
  // this function will return a value from column configuration
  // depending on the value that element holds
  showBooleanValue(elt: any, column: any): void {
    return column.config.values[`${elt[column.key]}`];
  }
}
