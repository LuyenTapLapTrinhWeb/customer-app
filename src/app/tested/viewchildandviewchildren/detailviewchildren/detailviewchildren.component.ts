import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { DetailviewchildService } from './detailviewchild.service';
import { Viewchildrend } from './detailviewchildren';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';
import { ChangeDetectorRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-detailviewchildren',
  templateUrl: './detailviewchildren.component.html',
  styleUrls: ['./detailviewchildren.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class DetailviewchildrenComponent implements OnInit, AfterViewInit {
  id: number;
  viewchildrend: Viewchildrend;
  @ViewChild('focusInputViewChildRef') focusInputViewChildRef: ElementRef;
  @ViewChild(NgModel) filterInput: NgModel;
  listFilter: string;
  constructor(
    private route: ActivatedRoute,
    private detailviewchildrenService: DetailviewchildService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.detailviewchildrenService.getViewchild(this.id)
        .pipe(tap(data => { console.log(data); }))
        .subscribe(viewchildrend => {
          this.viewchildrend = viewchildrend;
        });
    });
  }
  ngAfterViewInit(): void {
    this.filterInput.valueChanges.subscribe(
      () => this.listFilter
    );
    this.focusInputViewChildRef.nativeElement.focus();
    // this.focusInputViewChildRef.nativeElement.value = 'Whale!';
    // this.cd.detectChanges();
  }
}
