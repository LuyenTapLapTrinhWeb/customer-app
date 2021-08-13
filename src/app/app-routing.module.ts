import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'tested', loadChildren: () => import('./tested/test.module').then(m => m.TestModule) },
  { path: 'testapi', loadChildren: () => import('./testapi/testapi.module').then(m => m.TestapiModule) },
  { path: '', loadChildren: () => import('./tested/test.module').then(m => m.TestModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
