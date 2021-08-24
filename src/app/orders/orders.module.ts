import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharingModule } from '../shared/sharing.module';
import { ThuocTanDuocComponent } from './thuoc-tan-duoc/thuoc-tan-duoc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreenListTableComponent } from './thuoc-tan-duoc/screen-list-table/screen-list-table.component';
import { ScreenListComponent } from './thuoc-tan-duoc/screen-list-search/screen-list.component';
import { ScreenBarComponent } from './thuoc-tan-duoc/screen-list-add/screen-bar.component';
import { EmployeeComponent } from './person/employee/employee.component';
import { ScreenListSearchComboboxComponent } from './thuoc-tan-duoc/screen-list-search-selection/screen-list-search-selection.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ThuocTanDuocComponent,
    ScreenListTableComponent,
    ScreenListComponent,
    ScreenBarComponent,
    EmployeeComponent,
    ScreenListSearchComboboxComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    SharingModule,
  ]
})
export class OrdersModule { }
