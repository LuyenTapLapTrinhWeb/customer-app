import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent, children: [
      // { path: ':id', component: CustomerdetailComponent },
    ],
  },
  { path: ':id', component: CustomerdetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
