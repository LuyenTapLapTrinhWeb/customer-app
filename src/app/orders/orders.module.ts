import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharingModule } from '../shared/sharing.module';
import { ThuocTanDuocComponent } from './thuoc-tan-duoc/thuoc-tan-duoc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreenListTableComponent } from './thuoc-tan-duoc/screen-list-table/screen-list-table.component';
import { ScreenListComponent } from './thuoc-tan-duoc/screen-list-search/screen-list-search.component';
import { ScreenBarComponent } from './thuoc-tan-duoc/screen-list-bar/screen-bar.component';
import { EmployeeComponent } from './person/employee/employee.component';
import { ScreenListSearchSelectionComponent } from './thuoc-tan-duoc/screen-list-selection/screen-list-selection.component';
import { ScreenListButtonComponent } from './thuoc-tan-duoc/screen-list-button/screen-list-button.component';
import { ScreenListToggleComponent } from './thuoc-tan-duoc/screen-list-toggle/screen-list-toggle.component';
import { ScreenListGuideComponent } from './thuoc-tan-duoc/screen-list-guide/screen-list-guide.component';
import { ScreenListInputComponent } from './thuoc-tan-duoc/screen-list-input-serach/screen-list-input-search.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ThuocTanDuocComponent,
    ScreenListTableComponent,
    ScreenListComponent,
    ScreenBarComponent,
    EmployeeComponent,
    ScreenListSearchSelectionComponent,
    ScreenListButtonComponent,
    ScreenListToggleComponent,
    ScreenListGuideComponent,
    ScreenListInputComponent,
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
