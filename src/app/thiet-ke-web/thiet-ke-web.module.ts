import { ThietKeWebComponent } from './thiet-ke-web.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ThietKeWebComponent }
]
@NgModule({
  declarations: [
    ThietKeWebComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThietKeWebModule { }
