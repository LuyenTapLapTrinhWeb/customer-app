import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ISvgIconLiteral } from 'src/app/services/SvgIconLiteralts/svgIconLiteral.interface';
import { SvgIconLiteralService } from 'src/app/services/SvgIconLiteralts/svgIconLiteral.service';
import { PeriodicElement } from 'src/app/testapi/aq/lichthisv/lichthisv.component';


@Component({
  selector: 'app-thuoc-tan-duoc',
  templateUrl: './thuoc-tan-duoc.component.html',
  styleUrls: ['./thuoc-tan-duoc.component.scss']
})
export class ThuocTanDuocComponent {
  suaBanGhi(periodicElement: PeriodicElement): void {
    console.log('root parent sua', periodicElement);
  }
  xoaBanGhi(periodicElement: PeriodicElement): void {
    console.log('root parent xoa', periodicElement);
  }
  constructor(private svgicon: SvgIconLiteralService) {
    // this.svgicon.addMatIconSvgCustomObservable('ADD_ICON');
    this.svgicon.addMultiMatIconSvgCustomObservable(['ADD_ICON', 'REFRESH_ICON', 'QUESTION_MARK']);
  }
}
