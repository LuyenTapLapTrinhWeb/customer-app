import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { OnChanges, SimpleChanges } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';
import { LichThi } from '../../model/lichthi';
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
export class LichthisvComponent implements OnInit, AfterViewInit {
  lichthisvs: LichThiSV[];
  nhhklichsv: Nhhk[];
  errorMessage: string;
  displayedColumns: string[] = ['bmssv', 'nhhk'];
  dataSource = new MatTableDataSource<LichThiSV>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private lichthisvservice: LichthisvService) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.lichthisvservice.getLichThiSV().subscribe(
      lichthisvs => {
        this.lichthisvs = lichthisvs;
        this.dataSource = new MatTableDataSource<LichThiSV>(lichthisvs);
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        if (this.sort) {
          this.dataSource.sort = this.sort;
        }
      },
      errorMessage => { this.errorMessage = errorMessage; }
    );
    this.lichthisvservice.getNhhkLichSV().subscribe(
      nhhklichsv => { this.nhhklichsv = nhhklichsv; },
      errorMessage => { this.errorMessage = errorMessage; }
    );
  }
  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }
}
