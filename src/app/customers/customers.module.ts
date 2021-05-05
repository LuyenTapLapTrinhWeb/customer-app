import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { MaterialModule } from '../shared/material/material.module';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { SharingModule } from '../shared/sharing.module';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerdetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharingModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
