import { AfterViewInit, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { OffsetService } from 'src/app/services/stickyElement/offset.service';
import { StickyElement } from 'src/app/services/stickyElement/stickyElement.service';
import { SvgIconLiteralService } from 'src/app/services/SvgIconLiteralts/svgIconLiteral.service';
import { PeriodicElement } from 'src/app/testapi/aq/lichthisv/lichthisv.component';


@Component({
  selector: 'app-thuoc-tan-duoc',
  templateUrl: './thuoc-tan-duoc.component.html',
  styleUrls: ['./thuoc-tan-duoc.component.scss', '../../services/stickyElement/sticky.scss']
})
export class ThuocTanDuocComponent implements AfterViewInit {
  nav: StickyElement;
  isScrolled$: Subject<string> = new Subject<string>();

  suaBanGhi(periodicElement: PeriodicElement): void {
    console.log('root parent sua', periodicElement);
  }
  xoaBanGhi(periodicElement: PeriodicElement): void {
    console.log('root parent xoa', periodicElement);
  }
  constructor(
    private svgicon: SvgIconLiteralService,
    private offsetService: OffsetService
  ) {
    // this.svgicon.addMatIconSvgCustomObservable('ADD_ICON');
    this.svgicon.addMultiMatIconSvgCustomObservable(
      ['ADD_ICON', 'REFRESH_ICON', 'QUESTION_MARK', 'delete-recycle-bin', 'edit-pencil']);
  }
  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.nav = this.offsetService.onActionSticky();
    //   console.log(this.nav);
    // }, 2000);
  }
  getOffset(offset: number): void {
    // console.log(offset);
    // this.nav.onElementStickiesOffset(offset);
  }
}
