import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Codetogether1Component } from './codetogether1/codetogether1.component';
import { ExamplesComponent } from './examples/examples.component';
import { HowtoComponent } from './howto/howto.component';
import { OpenclosedComponent } from './openclosed/openclosed.component';
import { TestComponent } from './test.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '', component: TestComponent, children: [
      { path: 'codetogether', component: Codetogether1Component },
      { path: 'openclosed', component: OpenclosedComponent },
      {
        path: 'todo', component: TodosComponent, children: [
          { path: 'howto', component: HowtoComponent },
          { path: 'examples', component: ExamplesComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
