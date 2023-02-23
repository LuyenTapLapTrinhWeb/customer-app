import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharingModule } from '../shared/sharing.module';
import { ThuocTanDuocComponent } from './thuoc-tan-duoc/thuoc-tan-duoc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './person/employee/employee.component';
import { DesignModule } from '../design/design.module';
// import { StickyHuongDanSudungComponent } from '../services/stickyElement/sticky-huong-dan-su-dung/sticky-huong-dan-su-dung.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ThuocTanDuocComponent,
    EmployeeComponent,
  ],
  imports: [
    DesignModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    SharingModule,
  ],
})
export class OrdersModule { }
