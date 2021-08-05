import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharingModule } from '../shared/sharing.module';
import { ThuocTanDuocComponent } from './thuoc-tan-duoc/thuoc-tan-duoc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddButtonBarComponent } from './thuoc-tan-duoc/add-button-bar-title/add-button-bar.component';
import { ScreenListTableComponent } from './thuoc-tan-duoc/screen-list-table/screen-list-table.component';
import { ScreenListComponent } from './thuoc-tan-duoc/screen-list/screen-list.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ThuocTanDuocComponent,
    AddButtonBarComponent,
    ScreenListTableComponent,
    ScreenListComponent
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
