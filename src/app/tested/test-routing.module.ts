import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Codetogether1Component } from './codetogether1/codetogether1.component';
import { ConfigComponent } from './config/config.component';
import { ExamplesComponent } from './examples/examples.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HowtoComponent } from './howto/howto.component';
import { OpenclosedComponent } from './openclosed/openclosed.component';
import { SubcribingComponent } from './subcribing/subcribing.component';
import { TestComponent } from './test.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '', component: TestComponent, children: [
      {
        path: 'subcribing', component: SubcribingComponent, children: [
          { path: 'config', component: ConfigComponent },
          { path: 'heroes', component: HeroesComponent }
        ]
      },
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
