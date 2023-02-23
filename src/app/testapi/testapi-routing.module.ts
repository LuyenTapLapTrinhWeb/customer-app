import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AqComponent } from './aq/aq.component';
import { DetailLichthisvComponent } from './aq/detail-lichthisv/detail-lichthisv.component';
import { LichthisvComponent } from './aq/lichthisv/lichthisv.component';
import { TestapiComponent } from './testapi.component';
import { SutrixSolutionsComponent } from './sutrixsolutions/sutrixsolutions.component';

const routes: Routes = [
  { path: '', component: TestapiComponent },
  { path: 'aq', component: AqComponent },
  { path: 'aq/lichthisv', component: LichthisvComponent },
  { path: 'aq/lichthisv/:bmssv', component: DetailLichthisvComponent },
  { path: 'SutrixSolutions', component: SutrixSolutionsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestapiRoutingModule { }
