import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Codetogether1Component } from './codetogether1/codetogether1.component';
import { ComunicatingComponent } from './comunicating/comunicating.component';
import { ConfigComponent } from './config/config.component';
import { ExamplesComponent } from './examples/examples.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HowtoComponent } from './howto/howto.component';
import { OpenclosedComponent } from './openclosed/openclosed.component';
import { SubcribingComponent } from './subcribing/subcribing.component';
import { TestComponent } from './test.component';
import { TodosComponent } from './todos/todos.component';
import { TwowaybindingComponent } from './comunicating/twowaybinding/twowaybinding.component';
import { GettersandsettersComponent } from './comunicating/gettersandsetters/gettersandsetters.component';
import { BindingandstructuredirectivesComponent } from './comunicating/bindingandstructuredirectives/bindingandstructuredirectives.component';
import { IntroductionComponent } from './comunicating/introduction/introduction.component';
const communicatingComponent = {
  path: 'communicating', component: ComunicatingComponent, children: [
    { path: 'introduction', component: IntroductionComponent },
    { path: 'bindingandstructuredirectives', component: BindingandstructuredirectivesComponent },
    { path: 'twowaybinding', component: TwowaybindingComponent },
    { path: 'gettersandsetters', component: GettersandsettersComponent },
    { path: '**', redirectTo: 'introduction', pathMatch: 'full' },
  ]
};
const testComponent = {
  path: 'subcribing', component: SubcribingComponent, children: [
    { path: 'config', component: ConfigComponent },
    { path: 'heroes', component: HeroesComponent },
    communicatingComponent,
    { path: '**', redirectTo: 'communicating', pathMatch: 'full' },
  ]
};
const todoComponent = {
  path: 'todo', component: TodosComponent, children: [
    { path: 'howto', component: HowtoComponent },
    { path: 'examples', component: ExamplesComponent },
    { path: '**', redirectTo: 'howto', pathMatch: 'full' },
  ]
};
const routes: Routes = [
  {
    path: '', component: TestComponent, children: [
      testComponent,
      { path: 'codetogether', component: Codetogether1Component },
      { path: 'openclosed', component: OpenclosedComponent },
      todoComponent,
      { path: '**', redirectTo: 'subcribing', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
