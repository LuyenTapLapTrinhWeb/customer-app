import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/testapi/aq/lichthisv/lichthisv.component';
import { ELEMENT_DATA } from '../PeriodicElement';

@Component({
  selector: 'app-screen-list',
  templateUrl: './screen-list.component.html',
  styleUrls: ['./screen-list.component.scss']
})
export class ScreenListComponent {
  value = 'Clear me';
  filterListForm: FormGroup;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // tslint:disable-next-line:typedef
  get inputFilterList() {
    return this.filterListForm.get('inputFilterList')?.value;
  }
  constructor(private fb: FormBuilder) {
    this.filterListForm = this.fb.group({
      inputFilterList: ''
    });
  }
  applyFilter(filterBy: string): void {
    this.dataSource.filter = filterBy.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ganTheThuoc(): void { }
  suaBanGhi(): void { }
}
