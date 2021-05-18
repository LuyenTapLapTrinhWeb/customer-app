import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestapiRoutingModule } from './testapi-routing.module';
import { TestapiComponent } from './testapi.component';
import { AqComponent } from './aq/aq.component';
import { LichthisvComponent } from './aq/lichthisv/lichthisv.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { SharingModule } from '../shared/sharing.module';
import { DetailLichthisvComponent } from './aq/detail-lichthisv/detail-lichthisv.component';


@NgModule({
  declarations: [
    TestapiComponent,
    AqComponent,
    LichthisvComponent,
    DetailLichthisvComponent,
  ],
  imports: [
    CommonModule,
    TestapiRoutingModule,
    SharingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class TestapiModule { }
