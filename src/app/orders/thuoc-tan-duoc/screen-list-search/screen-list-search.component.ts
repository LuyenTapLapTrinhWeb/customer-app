import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { PeriodicElement } from 'src/app/testapi/aq/lichthisv/lichthisv.component';
import { ELEMENT_DATA } from '../PeriodicElement';

@Component({
  selector: 'app-screen-list-search',
  templateUrl: './screen-list-search.component.html',
  styleUrls: ['./screen-list-search.component.scss']
})
export class ScreenListComponent implements OnInit, AfterViewInit {
  value = 'Clear me';
  filterListForm: FormGroup;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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
