import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA, PeriodicElement } from '../PeriodicElement';
@Component({
  selector: 'app-screen-list-item',
  templateUrl: './screen-list-item.component.html',
  styleUrls: ['./screen-list-item.component.scss']
})
export class ScreenListItemComponent implements OnInit, AfterViewInit {
  value = 'Clear me';
  filterListForm: FormGroup;
  isScreenSmall425px!: boolean;
  // tslint:disable-next-line:variable-name
  matMenu: any;
  matMenuItem: any;
  matMenuItemMatIcon: any;

  // tslint:disable-next-line:typedef
  get inputFilterList() {
    return this.filterListForm.get('inputFilterList')?.value;
  }
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  displayedColumns: string[] = ['name', 'position', 'weight', 'symbol', 'star'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  // tslint:disable-next-line:no-output-rename
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder) {
    this.filterListForm = fb.group({
      inputFilterList: ''
    });
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

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterBy: string): void {
    this.dataSource.filter = filterBy.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
  ganTheThuoc(): void { }
  suaBanGhi(): void { }
}
