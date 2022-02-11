import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { InfinityScrollOption } from '../infinity-scroll/infinity-scroll-option';

@Component({
  selector: 'app-combobox-autocomplete-table',
  templateUrl: './combobox-autocomplete-table.component.html',
  styleUrls: ['./combobox-autocomplete-table.component.scss']
})
export class ComboboxAutocompleteTableComponent implements OnInit {
  /* ================================================================================= */
  // variable of infinite scroll
  /* ================================================================================= */
  myForm: FormGroup;
  listDataInfinityScrollOption: InfinityScrollOption[] = [];
  chucVuTouch: boolean = false;
  /* ================================================================================= */
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      id: [null]
    })
  }

  ngOnInit(): void {
    this.getListScroll();
  }

  changeIDCHUCVU(Loai: string, Ma: string) {
    this.myForm.patchValue({ IDCHUCVU: Ma })
    // this.theSelected.IDCHUCVU=parseInt(Ma)
  }
  getListScroll(): void {
    for (let i = 0; i < 150; i++) {
      this.listDataInfinityScrollOption.push({ value: i.toString(), label: i.toString() });
    }
  }
}
