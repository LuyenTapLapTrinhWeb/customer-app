import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Codetogether1Component } from './tested/codetogether1/codetogether1.component';
import { OpenclosedComponent } from './tested/openclosed/openclosed.component';
import { TodosComponent } from './tested/todos/todos.component';

const routes: Routes = [
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'tested', loadChildren: () => import('./tested/test.module').then(m => m.TestModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
