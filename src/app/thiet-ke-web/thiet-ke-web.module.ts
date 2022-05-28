import { ThietKeWebComponent } from './thiet-ke-web.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CascadeCssRuleComponent } from './cascade-css-rule/cascade-css-rule.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from '../404/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  {
    path: '', component: ThietKeWebComponent, children: [
      { path: 'home', component: WelcomePageComponent, },
      { path: 'html5', component: HomePageComponent, },
      { path: 'css3', component: CascadeCssRuleComponent, },
    ]
  },
  { path: '**', redirectTo: 'home', },
]
@NgModule({
  declarations: [
    ThietKeWebComponent,
    CascadeCssRuleComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThietKeWebModule { }
