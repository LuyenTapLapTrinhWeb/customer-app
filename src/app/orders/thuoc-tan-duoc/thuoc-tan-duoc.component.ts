import { Component } from '@angular/core';
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
}
