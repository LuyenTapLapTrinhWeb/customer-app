import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { SharingModule } from '../shared/sharing.module';
import { HistoryInterviewComponent } from './history-interview.component';


const routes: Routes = [
  { path: '', component: HistoryInterviewComponent },
];

@NgModule({
  declarations: [
    HistoryInterviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class HistoryInterviewModule { }
