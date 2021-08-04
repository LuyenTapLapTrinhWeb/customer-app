import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { ThuocTanDuocComponent } from './thuoc-tan-duoc/thuoc-tan-duoc.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'thuoc-tan-duoc', component: ThuocTanDuocComponent },
  { path: 'thuoc-tan-duoc/0/edit', component: ThuocTanDuocComponent },
  { path: 'thuoc-tan-duoc/0/guide', component: ThuocTanDuocComponent },
  { path: 'thuoc-tan-duoc/0/refresh', component: ThuocTanDuocComponent },
  { path: 'thuoc-tan-duoc/:id/edit', component: ThuocTanDuocComponent },
  { path: '**', redirectTo: 'thuoc-tan-duoc' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
