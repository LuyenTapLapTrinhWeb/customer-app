import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { THE_THUOC_DVS } from 'src/app/entities/DanhMuc/THE_THUOC_DVS';
// import { THUOC } from 'src/app/entities/DanhMuc/THUOC';
import { ELEMENT_DATA, PeriodicElement } from './PeriodicElement';


@Component({
  selector: 'app-thuoc-tan-duoc',
  templateUrl: './thuoc-tan-duoc.component.html',
  styleUrls: ['./thuoc-tan-duoc.component.scss']
})
export class ThuocTanDuocComponent implements OnInit, AfterViewInit {
  filterListForm: FormGroup;
  value = 'Clear me';
  isScreenSmall425px!: boolean;


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

  constructor(fb: FormBuilder) {
    this.filterListForm = fb.group({
      inputFilterList: ''
    });
  }
  ngOnInit(): void {
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
  capNhatDanhSach(): void { }
  themBanGhi(): void { }
  ganTheThuoc(): void { }
}
