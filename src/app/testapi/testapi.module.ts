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
import { SearchMsssvComponent } from './aq/search-msssv/search-msssv.component';
import { CardAnimationComponent } from './custom-component/card-animation/card-animation.component';
import { SutrixSolutionsComponent } from './sutrixsolutions/sutrixsolutions.component';


@NgModule({
  declarations: [
    TestapiComponent,
    AqComponent,
    LichthisvComponent,
    DetailLichthisvComponent,
    SearchMsssvComponent,
    CardAnimationComponent,
    SutrixSolutionsComponent,
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
