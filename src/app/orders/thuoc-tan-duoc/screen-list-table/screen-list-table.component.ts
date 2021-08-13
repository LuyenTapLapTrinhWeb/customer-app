import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { matMenu, matMenuItem, matMenuItemMatIcon } from './edit-button.css';
import { PeriodicElement } from '../PeriodicElement';
import { OffsetService } from 'src/app/services/stickyElement/offset.service';
import { StickyElement } from 'src/app/services/stickyElement/stickyElement.service';
@Component({
  selector: 'app-screen-list-table',
  templateUrl: './screen-list-table.component.html',
  styleUrls: ['./screen-list-table.component.scss'],
})
export class ScreenListTableComponent implements OnInit, AfterViewInit {
  nav: StickyElement;
  matMenu: any;
  matMenuItem: any;
  matMenuItemMatIcon: any;

  @Input() dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'position', 'weight', 'symbol', 'star'];
  selection = new SelectionModel<PeriodicElement>(true, []);


  // tslint:disable-next-line:no-output-rename
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<PeriodicElement>();
  @Output() suaBanGhiEventEmitter = new EventEmitter<PeriodicElement>();
  @Output() xoaBanGhiEventEmitter = new EventEmitter<PeriodicElement>();
  constructor() {
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
  suaBanGhi(periodicElement: PeriodicElement): void {
    this.suaBanGhiEventEmitter.emit(periodicElement);
  }
  xoaBanGhi(periodicElement: PeriodicElement): void {
    this.xoaBanGhiEventEmitter.emit(periodicElement);
  }
}
