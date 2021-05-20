import { Location } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';
import { LichThi } from '../../model/lichthi';
import { LichThiSV } from '../../model/lichthisv';
import { Nhhk } from '../../model/nhhk';
import { LichthisvService } from '../../services/lichthisv.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
  selectednhhk: string;
  displayedColumns: string[] = ['bmssv', 'nhhk'];

  isLoadingResults = true;

  dataSource: MatTableDataSource<LichThiSV>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild(MatSelect) nhhk: MatSelect;


  constructor(
    private location: Location,
    private lichthisvservice: LichthisvService
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.lichthisvservice.getLichSVTenNhhk().subscribe(lichthisvs => {
      this.lichthisvs = lichthisvs;
      this.lichthisvservice.getNhhkLichSV().subscribe(
        nhhklichsv => {
          this.nhhklichsv = nhhklichsv;

          this.dataSource = new MatTableDataSource(lichthisvs);

          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }
          if (this.sort) {
            this.dataSource.sort = this.sort;
          }
          this.isLoadingResults = false;
        },
        errorMessage => { this.errorMessage = errorMessage; }
      );
    });
  }
  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }
  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectStage(event): void {
    this.lichthisvservice.getLichThiCondition(this.searchInput.nativeElement.value, event.value).subscribe(
      lichthisvs => { this.dataSource = new MatTableDataSource(lichthisvs); },
      errorMessage => { this.errorMessage = errorMessage; }
    );
  }
  goback(): void {
    // this.router.navigateByUrl('/aq/lichthisv');
    this.location.back();
  }
}
