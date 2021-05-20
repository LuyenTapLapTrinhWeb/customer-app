import { Location } from '@angular/common';
import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';
import { LichThi } from '../../model/lichthi';
import { Nhhk } from '../../model/nhhk';
import { LichthisvService } from '../../services/lichthisv.service';
@Component({
  selector: 'app-detail-lichthisv',
  templateUrl: './detail-lichthisv.component.html',
  styleUrls: ['./detail-lichthisv.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block'
  },
  animations: [
    visibility(),
    flyInOut(),
    toggleTrigger(),
    transitionY()
  ]
})
export class DetailLichthisvComponent implements OnInit, AfterViewInit {
  errorMessage: string;
  lichthisv: LichThi[];
  selection: any;
  bmssv: string;
  nhhk: Nhhk;
  state = 'hidden';
  displayedColumns: string[] = ['ma_mon_hoc', 'ten_mon_hoc', 'hinh_thuc', 'ma_phong', 'ngay_thi', 'nhom_thi', 'so_phut', 'so_tiet', 'ten_phong', 'tiet_bat_dau', 'to_thi'];
  dataSource: MatTableDataSource<LichThi>;

  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(
    private lichthiservice: LichthisvService,
    private location: Location,
    private activatedroute: ActivatedRoute) {
  }
  ngOnInit(): void {

  }
  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit(): void {
    this.activatedroute.params.pipe(
      switchMap((params: Params) => {
        this.state = 'hidden';
        this.isLoadingResults = true;
        return this.lichthiservice.getLichThiSVByBMSSV(params.bmssv);
      }))
      .subscribe(lichthisv => {
        lichthisv.map(lichthi => {
          this.lichthisv = lichthi.lichthisv;

          this.lichthiservice.getNhhkLichSVBynhhk(lichthi.nhhk).subscribe(nhhk => {
            this.bmssv = lichthi.bmssv;
            this.nhhk = nhhk[0]; this.state = 'show';
            this.dataSource = new MatTableDataSource(lichthi.lichthisv);
            this.searchInput.nativeElement.focus();
            if (this.paginator) {
              this.dataSource.paginator = this.paginator;
            }
            if (this.sort) {
              this.dataSource.sort = this.sort;
            }
            this.isLoadingResults = false;
          });
        });
      },
        errorMessage => { this.errorMessage = errorMessage; }
      );
  }
  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }
  goback(): void {
    // this.router.navigateByUrl('/aq/lichthisv');
    this.location.back();
  }
}
