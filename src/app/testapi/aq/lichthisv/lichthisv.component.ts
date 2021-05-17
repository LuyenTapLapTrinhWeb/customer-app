import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';
import { LichThiSV } from '../../model/lichthisv';
import { Nhhk } from '../../model/nhhk';
import { LichthisvService } from '../../services/lichthisv.service';
const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-lichthisv',
  templateUrl: './lichthisv.component.html',
  styleUrls: ['./lichthisv.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block'
  },
  animations: [
    visibility(),
    flyInOut(),
    toggleTrigger()
  ]
})
export class LichthisvComponent implements OnInit {
  lichthisvs: LichThiSV[];
  nhhklichsv: Nhhk[];
  errorMessage: string;

  displayedColumns: string[] = ['position', 'name'];
  selection: any;
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private lichthisvservice: LichthisvService,
  ) {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<LichThiSV>(allowMultiSelect, initialSelection);
  }

  ngOnInit(): void {
    this.lichthisvservice.getLichThiSV().subscribe(
      lichthisvs => {
        this.lichthisvs = lichthisvs;
        this.dataSource = new MatTableDataSource(this.lichthisvs);
        this.dataSource.sort = this.sort;
      },
      errorMessage => { this.errorMessage = errorMessage; }
    );
    this.lichthisvservice.getNhhkLichSV().subscribe(
      nhhklichsv => { this.nhhklichsv = nhhklichsv; },
      errorMessage => { this.errorMessage = errorMessage; }
    );
  }
  /** Whether the number of selected elements matches the total number of rows. */
  // tslint:disable-next-line:typedef
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // tslint:disable-next-line:typedef
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }
}
