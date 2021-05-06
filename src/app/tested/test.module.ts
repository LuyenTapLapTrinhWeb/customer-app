import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';
import { SharingModule } from '../shared/sharing.module';
import { MaterialModule } from '../shared/material/material.module';
import { TodosComponent } from './todos/todos.component';
import { SubcribingComponent } from './subcribing/subcribing.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    TestComponent,
    HowtoComponent,
    ExamplesComponent,
    TodosComponent,
    SubcribingComponent,
    ConfigComponent,
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    SharingModule,
    MaterialModule,
    TestRoutingModule,
    HttpClientModule
  ]
})
export class TestModule { }
