import { Component, OnInit } from '@angular/core';
import { LichthisvService } from '../../services/lichthisv.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { LichThiSV } from '../../model/lichthisv';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-search-msssv',
  templateUrl: './search-msssv.component.html',
  styleUrls: ['./search-msssv.component.scss']
})
export class SearchMsssvComponent implements OnInit {
  lichthisvs$!: Observable<LichThiSV[]>;
  private searchTerms = new Subject<string>();

  constructor(private lichthisvservice: LichthisvService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // this.lichthisvs$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.lichthisvservice.searchLichThiSV(term)),
    // );
  }

}
