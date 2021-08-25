import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { OffsetService } from 'src/app/services/stickyElement/offset.service';
import { StickyElement } from 'src/app/services/stickyElement/stickyElement.service';
import { PeriodicElement } from 'src/app/testapi/aq/lichthisv/lichthisv.component';
import { ELEMENT_DATA } from '../PeriodicElement';
import { SELECTIONOPTIONLIST } from '../screen-list-selection/selection-list.data';
import { SelectionOptionList } from '../screen-list-selection/selection-option.interface';

@Component({
  selector: 'app-screen-list',
  templateUrl: './screen-list.component.html',
  styleUrls: ['./screen-list.component.scss']
})
export class ScreenListComponent implements OnInit, AfterViewInit {
  value = 'Clear me';
  filterListForm: FormGroup;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  nav!: StickyElement;
  selectionOptionList!: SelectionOptionList;
  @Input() isScrolled$: Subject<string>;

  @Output() suaBanGhiEventEmitterRootParent = new EventEmitter<PeriodicElement>();
  @Output() xoaBanGhiEventEmitterRootParent = new EventEmitter<PeriodicElement>();
  // tslint:disable-next-line:typedef
  get inputFilterList() {
    return this.filterListForm.get('inputFilterList')?.value;
  }
  constructor(private fb: FormBuilder, private offsetService: OffsetService) {
    this.filterListForm = this.fb.group({
      inputFilterList: ''
    });
  }
  ngOnInit(): void {
    this.isScrolled$.subscribe(val => console.log('Child: ', val));
    this.selectionOptionList = SELECTIONOPTIONLIST;
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.nav = this.offsetService.onActionSticky();
      console.log(this.nav);
    }, 2000);
  }
  getOffset(offset: number): void {
    console.log(offset);
    this.nav.onElementStickiesOffset(offset);
  }
  applyFilter(filterBy: string): void {
    this.dataSource.filter = filterBy.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ganTheThuoc(): void { }
  suaBanGhi(selectedRow: PeriodicElement): void {
    console.log('parrent sua', selectedRow);
    this.suaBanGhiEventEmitterRootParent.emit(selectedRow);
  }
  xoaBanGhi(selectedRow: PeriodicElement): void {
    console.log('parrent xoa', selectedRow);
    this.xoaBanGhiEventEmitterRootParent.emit(selectedRow);
  }
}
