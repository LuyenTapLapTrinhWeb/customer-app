import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';
import { LichThi } from '../../model/lichthi';
import { LichThiSV } from '../../model/lichthisv';
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
    toggleTrigger()
  ]
})
export class DetailLichthisvComponent implements OnInit, AfterViewInit {
  errorMessage: string;
  lichthisv: LichThi[];
  selection: any;
  dataSource: any;
  bmssv: string;
  nhhk: string;
  displayedColumns: string[] = [
    'hinh_thuc',
    'ma_mon_hoc',
    'ma_phong',
    'ngay_thi',
    'nhom_thi',
    'so_phut',
    'so_tiet',
    'ten_mon_hoc',
    'ten_phong',
    'tiet_bat_dau',
    'to_thi'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private lichthiservice: LichthisvService,
    private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource<LichThi>();
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        // this.visibilityState = 'hidden';
        return this.lichthiservice.getLichThiSVByBMSSV(params.bmssv);
      }))
      .subscribe(lichthisv => {
        lichthisv.map(value => {
          this.bmssv = value.bmssv;
          this.nhhk = value.nhhk;
          this.lichthisv = value.lichthisv;
          this.dataSource = new MatTableDataSource<LichThi>(value.lichthisv);
        });
      },
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

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
