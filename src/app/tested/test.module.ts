import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';
import { SharingModule } from '../shared/sharing.module';
import { MaterialModule } from '../shared/material/material.module';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    TestComponent,
    HowtoComponent,
    ExamplesComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    SharingModule,
    MaterialModule,
    TestRoutingModule,
  ]
})
export class TestModule { }
