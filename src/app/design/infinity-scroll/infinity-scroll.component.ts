
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { scan, takeUntil } from 'rxjs/operators';
import { InfinityScrollOption } from './infinity-scroll-option';
import { SvgIconLiteralService } from 'src/app/services/SvgIconLiteralts/svgIconLiteral.service';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.scss']
})
export class SelectInfinityScrollComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data$: Array<InfinityScrollOption> =
    new Array<InfinityScrollOption>();
  @Input() dataExtra: Array<InfinityScrollOption> =
    new Array<InfinityScrollOption>();
  @Input() optionExtra!: InfinityScrollOption;
  @Input() value!: any;
  @Input() validator!: boolean;
  @Input() disable!: boolean;
  @Input() touched!: boolean;
  @Input() clear!: boolean;
  @Output() changeValue = new EventEmitter();
  @Output() changeSearch = new EventEmitter();
  dataT: Array<any> = new Array<any>();
  ctrl: any;
  myform = new FormGroup({
    formcontrol: new FormControl(),
  });
  searchCtrl: FormControl = new FormControl();
  subscriptions: Subscription[] = [];
  _options = new BehaviorSubject<any[]>([]);
  options$ = this._options
    .asObservable()
    .pipe(scan((acc: any[], curr: any[]) => [...acc, ...curr], []));
  offset = 0;
  limit = 20;
  data = [];
  _data: any;
  data_: any;
  filtered: any = [];
  isSearch = '';
  ngUnsubscribe = new Subject();
  constructor(private svgicon: SvgIconLiteralService) {
    // this.svgicon.addMultiMatIconSvgCustomObservable(BARSVGICONS);
  }
  ngOnInit(): void {
    const dt = this.cloneObject(this.data$);
    this.dataT = dt;
    if (this.validator) {
      this.myform.controls.formcontrol.setValidators([Validators.required]);
    } else {
      this.myform.controls.formcontrol.clearValidators();
    }
    let tmpData: Array<InfinityScrollOption> =
      new Array<InfinityScrollOption>();
    if (this.dataExtra.length > 0) {
      if (this.optionExtra) {
        tmpData = [...this.dataT, ...this.dataExtra, this.optionExtra];
      } else {
        tmpData = [...this.dataT, ...this.dataExtra];
      }
    } else {
      if (this.optionExtra) {
        const num = this.dataT.findIndex(
          (x: any) => x.value === this.optionExtra.value
        );
        if (num > -1) {
          this.dataT.splice(num, 1);
        }
        tmpData = [...this.dataT, this.optionExtra];
      } else {
        tmpData = this.dataT;
      }
    }
    this._data = new BehaviorSubject<any[]>(tmpData);
    this.data_ = this._data.asObservable();
    this.subscriptions.push(
      this.data_.subscribe({
        next: (data: any) => {
          this.data = data;
          this.offset = 0;
          this._options.next([]);
          this.getNextBatch();
          this.setEventFilterCtrl(
            this.data,
            this.filtered,
            this.searchCtrl,
            'label'
          );
        },
      })
    );
    this.subscriptions.push(
      this.searchCtrl.valueChanges.subscribe((val: any) =>
        this.onSearchChange(val)
      )
    );
    this.subscriptions.push();
    this.setValue();
  }
  ngOnChanges(): void {
    if (!this.disable && this.touched) {
      this.myform.markAllAsTouched();
    } else {
      this.myform.markAsUntouched();
    }
    this._data = new BehaviorSubject<any[]>(this.dataT);
    this.data_ = this._data.asObservable();
    this.subscriptions.push(
      this.data_.subscribe({
        next: (data: any) => {
          this.data = data;
          this.offset = 0;
          this._options.next([]);
          this.getNextBatch();
          this.setEventFilterCtrl(
            this.data,
            this.filtered,
            this.searchCtrl,
            'label'
          );
        },
      })
    );
    this.subscriptions.push(
      this.searchCtrl.valueChanges.subscribe((val: any) =>
        this.onSearchChange(val)
      )
    );
    this.subscriptions.push();
    this.setValue();
  }
  // tslint:disable-next-line:typedef
  clearvalue(): void {
    this.value = null;
    this.ctrl = null;
    this.changeValue.emit(null);
    // this.ngOnInit()
  }
  // tslint:disable-next-line:typedef
  setValue(): void {
    this.data = this.cloneObject(this.data$);
    if (this.data.length > 0 && this.value) {
      this.data = this.data.sort();
      this.offset = 0;
      this._options = new BehaviorSubject<any[]>([]);
      const select = this.data.filter((data: any) => data.value === this.value);
      if (select.length > 0) {
        const a = this.data.findIndex((x: any) => x === select[0]);
        const stt = (a - (a % this.limit)) / this.limit;
        this.offset = stt * this.limit;
      }
      const data_new = this.data;
      const data_before_value = this.data.slice(0, this.offset);

      data_new.splice(0, this.offset);
      this.data = data_new.concat(data_before_value);
      this.offset = 0;
      const result = this.data.slice(this.offset, this.offset + this.limit);
      this._options.next(result);
      this.options$ = this._options
        .asObservable()
        .pipe(scan((acc: any[], curr: any[]) => [...acc, ...curr], []));
      this.offset += this.limit;
      this.ctrl = this.value;
    } else {
      this.offset = 0;
      this._options = new BehaviorSubject<any[]>([]);
      this._options.next(
        this.data.slice(this.offset, this.offset + this.limit)
      );
      this.options$ = this._options
        .asObservable()
        .pipe(scan((acc: any[], curr: any[]) => [...acc, ...curr], []));
      this.offset += this.limit;
      this.ctrl = '';
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: any) => sub.unsubscribe());
  }
  onChange(e: any): void {
    this.changeValue.emit(e);
  }
  onSearchChange(e: any): void {
    this.changeSearch.emit(e);
  }
  getNextBatch(): void {
    const results = this.data.slice(this.offset, this.offset + this.limit);
    this._options.next(results);
    this.offset += this.limit;
  }
  getFormErrorMessage(): string {
    if (this.myform.controls.formcontrol.hasError('required')) {
      return 'Không được phép để trống.';
    }
    return '';
  }
  hasError(): boolean {
    return this.myform.controls.formcontrol.invalid;
  }
  filter(
    dataSource: any,
    filteredDataSource: any,
    filterCtrl: FormControl,
    label: string
  ): void {
    if (!this.data) {
      return;
    }
    let search = filterCtrl.value;
    if (!search) {
      this.offset = 0;
      this._options = new BehaviorSubject<any[]>([]);
      const select = this.data.filter((data: any) => data.value === this.value);
      if (select.length > 0) {
        const a = this.data.findIndex((x: any) => x === select[0]);
        const stt = (a - (a % this.limit)) / this.limit;
        this.offset = stt * this.limit;
      }
      const data_new = this.data;
      const data_before_value = this.data.slice(0, this.offset);
      data_new.splice(0, this.offset);
      this.data = data_new.concat(data_before_value);
      this.offset = 0;
      const dt = this.data.slice(this.offset, this.offset + this.limit);
      this._options.next(dt);
      this.options$ = this._options
        .asObservable()
        .pipe(scan((acc: any[], curr: any[]) => [...acc, ...curr], []));
      this.offset += this.limit;
      this.ctrl = this.value;
      return;
    } else {
      search = search.toLowerCase();
      this.isSearch = search;
    }
    this.offset = 0;
    this._options = new BehaviorSubject<any[]>([]);
    this.filtered = this.data.filter(
      (data: InfinityScrollOption) =>
        data.label?.toString().toLocaleLowerCase().indexOf(search) > -1
    );
    const result = this.filtered.slice(this.offset, this.offset + this.limit);
    this._options.next(result);
    this.options$ = this._options
      .asObservable()
      .pipe(scan((acc: any[], curr: any[]) => [...acc, ...curr], []));
    this.offset += this.limit;
    this.ctrl = this.value;
  }
  setEventFilterCtrl(
    dataSource: any,
    filteredDataSource: any,
    filterCtrl: FormControl,
    label: string
  ): void {
    this.filtered = dataSource.slice();
    filterCtrl.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.filter(dataSource, filteredDataSource, filterCtrl, label);
      });
  }
  cloneObject(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
