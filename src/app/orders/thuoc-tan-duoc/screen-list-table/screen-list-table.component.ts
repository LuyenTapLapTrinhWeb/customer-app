import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PeriodicElement } from '../PeriodicElement';
@Component({
  selector: 'app-screen-list-table',
  templateUrl: './screen-list-table.component.html',
  styleUrls: ['./screen-list-table.component.scss']
})
export class ScreenListTableComponent implements OnInit {

  matMenu: any;
  matMenuItem: any;
  matMenuItemMatIcon: any;

  @Input() dataSource: any;
  displayedColumns: string[] = ['name', 'position', 'weight', 'symbol', 'star'];
  selection = new SelectionModel<PeriodicElement>(true, []);


  // tslint:disable-next-line:no-output-rename
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<PeriodicElement>();

  constructor() {

  }

  ngOnInit(): void {
    // tslint:disable-next-line:quotemark
    this.matMenu = {
      border: 'thin dashed #0E8CC1 !important'
    };
    this.matMenuItem = {
      display: 'flex',
      'flex-flow': 'column',
      'justify-content': 'center',
      'align-items': 'center',
      'box-sizing': 'border-box',
      'min-width': '40px',
      border: '1px solid #316ffa',
      color: '#316ffa',
      'font-family': 'Roboto',
      'font-style': 'normal',
      'font-weight': '300',
      'font-size': '1rem',
      'line-height': '21px',
      transform: 'translateY(0)',
      'box-shadow': '0px 0 0 black',
      transition: 'all 0.1s ease-in-out',
      'border-radius': '4px',
      margin: '0 8px',
      padding: 0
    };
    this.matMenuItemMatIcon = {
      margin: 0,
      color: '#316ffa'
    };
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

}
