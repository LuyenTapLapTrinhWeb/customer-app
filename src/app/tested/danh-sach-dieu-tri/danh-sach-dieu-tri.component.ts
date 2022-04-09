import { SelectionModel } from "@angular/cdk/collections";
import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BacSi } from "./model/BACSI";
import { BenhChinh } from "./model/BENHCHINH";
import { ChamSoc } from "./model/CHAMSOC";
import { DienBien } from "./model/DIENBIEN";
import { ToDieuTri } from "./model/TODIEUTRI";
import { TODIEUTRI } from "./model/TODIEUTRI.data";
import { YLenh } from "./model/YLENH";
import { DatePositionFormat, DateSymbolFormat } from "./service/date-symbol-format.enum";
import { IPropertyTranferDate } from "./service/date-transfer.interface";
import { TransferDate } from "./service/date-transfer.static";


@Component({
  selector: 'danh-sach-to-dieu-tri',
  templateUrl: './danh-sach-dieu-tri.component.html',
  styleUrls: ['./danh-sach-dieu-tri.component.scss']
})
export class DanhSachDieuTriComponent implements OnInit, AfterViewInit {
  benhchinhs!: BenhChinh[];
  bacsis: BacSi[];
  chamsocs: ChamSoc[];
  selectedbenhchinh: BenhChinh;
  selectedbacsi: BacSi;
  selectedchamsoc: ChamSoc;
  textIDbenhchinh: string;
  textIDbenhchinhSearchFalse: boolean;
  ipdt: IPropertyTranferDate = { newDate: new Date(), datePosition: DatePositionFormat.ddmmyyyy, dateSymbol: DateSymbolFormat.slash }
  /* form */
  todieutriFormGroup: FormGroup;

  /* table */
  displayedColumns: string[] = ['ngaygio', 'dienbien.bacsi', 'dienbien.dienbien', 'ylenh.bacsi', 'ylenh.ylenh', 'in', 'ky'];
  displayHeadersMergeColumns: string[] = ['Ngaygio', 'Dienbien', 'Ylenh', 'In', 'Ky'];

  dataSource = new MatTableDataSource<ToDieuTri>([]);
  // todieutris: ToDieuTri[];
  constructor(private fb: FormBuilder) {
    this.benhchinhs = [];
    this.bacsis = [];
    this.chamsocs = [];
  }
  /* paginator */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  /* checkbox */
  selection = new SelectionModel<ToDieuTri>(true, []);
  /* event emitter */
  @Output() private onTodieutriFormGroupChange = new EventEmitter<any>();

  ngAfterViewInit(): void {
    // this.todieutris = TODIEUTRI;
    this.dataSource = new MatTableDataSource(TODIEUTRI);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    const loops = 10;
    for (let i = 0; i < loops; i++) {
      let item = { id: i.toString(), name: `name ${i}` };
      this.benhchinhs.push(item);
      this.bacsis.push(item);
      this.chamsocs.push(item);
    }
    this.todieutriFormGroup = this.fb.group({
      selectedbenhchinh: [this.benhchinhs[0]],
      textIDbenhchinh: [this.benhchinhs[0].id],
      textngay: [TransferDate.formatDateNow(this.ipdt)],
      textgio: [TransferDate.formatTimeNow(this.ipdt)],
      textsoto: [1, [Validators.required, Validators.minLength(10)]],
      textphong: [''],
      textgiuong: [''],
      textdienbien: [''],
      textylenh: [''],
      textchandoan: [this.benhchinhs[0].name],
      selectedbacsi: [this.bacsis[0]],
      selectedchamsoc: [this.chamsocs[0]],
    });
    // event changes
    this.todieutriFormGroup.valueChanges.subscribe((changes) => {
      if (changes.textIDbenhchinh) {
        this.textIDbenhchinh = changes.textIDbenhchinh;
      }
      if (changes.selectedchamsoc) {
        this.selectedchamsoc = changes.selectedchamsoc
      }
      if (changes.selectedbacsi) {
        this.selectedbacsi = changes.selectedbacsi
      }
      if (changes.selectedbenhchinh) {
        this.selectedbenhchinh = changes.selectedbenhchinh
      }
    });
    this.onTodieutriFormGroupChange.emit(this.todieutriFormGroup);
  }
  onPatchValueTextbenhchinh(textIDbenhchinh: string): void {
    if (!textIDbenhchinh) {
      return;
    }
    this.benhchinhs.forEach(benhchinhLoop => {
      if (benhchinhLoop.id.includes(textIDbenhchinh || this.textIDbenhchinh)) {
        // update value selectedbenhchinh
        // const selectedbenhchinh = this.todieutriFormGroup.get("selectedbenhchinh");
        // selectedbenhchinh.patchValue(benhchinhLoop);
        this.todieutriFormGroup.get("selectedbenhchinh").patchValue(benhchinhLoop);
        this.onTodieutriFormGroupChange.emit(this.todieutriFormGroup);
      }
    })
  }
  /* 
  ** @benhchinh: dfdf
  */
  onPatchValueSelectedbenhchinh(benhchinh: BenhChinh): void {
    if (!benhchinh) {
      return;
    }
    let id = benhchinh?.id;
    let name = benhchinh?.name;
    this.todieutriFormGroup.get('textIDbenhchinh').patchValue(id);
    this.todieutriFormGroup.get('textchandoan').patchValue(name);
    this.onTodieutriFormGroupChange.emit(this.todieutriFormGroup);
  }
  formatDateTimeNow(date: Date): string {
    return TransferDate.formatDateTimeNow(date);
  }
  printDienBien(dienbien: DienBien): string {
    let result = `${dienbien.bacsi.name} ${dienbien.chamsoc.name} ${dienbien.chisosuckhoe.mota}`;
    return result;
  }
  printYlenh(ylenh: YLenh): string {
    let result = `${ylenh.bacsi.name} ${ylenh.chidinhdichvu.mota} ${ylenh.todieutri}`;
    return result;
  }
}
