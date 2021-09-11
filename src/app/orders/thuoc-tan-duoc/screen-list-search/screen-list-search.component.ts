import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/testapi/aq/lichthisv/lichthisv.component';
import { Actions, ActionsElement, TableReuseableColumns } from '../screen-list-table-reuseable/table-reuseable-columns.interface';
import { PeriodicElementData } from '../screen-list-table/PeriodicElement.data';
import { TableReuseableConfig } from '../screen-list-table-reuseable/table-reuseable.config';

@Component({
  selector: 'app-screen-list-search',
  templateUrl: './screen-list-search.component.html',
  styleUrls: ['./screen-list-search.component.scss']
})
export class ScreenListComponent implements OnInit, AfterViewInit {
  value = 'Clear me';
  filterListForm: FormGroup;
  cols: TableReuseableColumns[];
  tableReuse: TableReuseableConfig;
  dataSource: MatTableDataSource<PeriodicElement>;
  @Output() suaBanGhiEventEmitterRootParent = new EventEmitter<PeriodicElement>();
  @Output() xoaBanGhiEventEmitterRootParent = new EventEmitter<PeriodicElement>();
  // tslint:disable-next-line:typedef
  get inputFilterList() {
    return this.filterListForm.get('inputFilterList')?.value;
  }
  constructor(private fb: FormBuilder) {
    this.filterListForm = this.fb.group({
      inputFilterList: ''
    });
  }
  ngOnInit(): void {
    this.cols = [
      { key: 'position', display: '#', config: { isSticky: true } },
      { key: 'name', display: 'Name' },
      { key: 'weight', display: 'Weight' },
      { key: 'symbol', display: 'Symbol' },
      {
        key: 'star', display: '', config: {
          isStickyEnd: true, isAction: true,
          actions: [
            { svgIcon: 'edit-pencil', matTooltip: 'Sửa bản ghi' },
            { svgIcon: 'delete-recycle-bin', matTooltip: 'Xóa bản ghi' },
          ]
        }
      },
    ];
    this.tableReuse = new TableReuseableConfig(this.cols, PeriodicElementData);
    this.dataSource = new MatTableDataSource(this.tableReuse.ELEMENT_DATA);
  }
  onActionHandler(event: ActionsElement): void {
    this.tableReuse.onActionHandler(event);
  }
  ngAfterViewInit(): void {

  }
  getOffset(offset: number): void {

  }
  onClickBtnSearch(filterBy: string): void {
    this.dataSource.filter = filterBy.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  suaBanGhi(selectedRow: PeriodicElement): void {
    console.log('parrent sua', selectedRow);
    this.suaBanGhiEventEmitterRootParent.emit(selectedRow);
  }
  xoaBanGhi(selectedRow: PeriodicElement): void {
    console.log('parrent xoa', selectedRow);
    this.xoaBanGhiEventEmitterRootParent.emit(selectedRow);
  }
}
