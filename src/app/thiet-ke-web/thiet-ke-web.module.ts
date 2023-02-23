import { ResponsivePiesComponent } from './responsive-pies/responsive-pies.component';
import { ResponsiveContactComponent } from './responsive-contact/responsive-contact.component';
import { ResponsiveHomeComponent } from './responsive-home/responsive-home.component';
import { ThietKeWebComponent } from './thiet-ke-web.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CascadeCssRuleComponent } from './cascade-css-rule/cascade-css-rule.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from '../404/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ResponsiveSiteComponent } from './responsive-site/responsive-site.component';
import { HttpClientModule } from '@angular/common/http';
import { SharingModule } from '../shared/sharing.module';
import { ResponsiveOrderComponent } from './responsive-order/responsive-order.component';


const routes: Routes = [
  {
    path: '', component: ThietKeWebComponent, children: [
      { path: '', component: WelcomePageComponent, },
      { path: 'home', component: WelcomePageComponent, },
      { path: 'html5', component: HomePageComponent, },
      { path: 'css3', component: CascadeCssRuleComponent },
      {
        path: 'responsive', component: ResponsiveSiteComponent, children: [
          { path: '', component: ResponsiveHomeComponent },
          { path: 'homepage', component: ResponsiveHomeComponent },
          { path: 'pies', component: ResponsivePiesComponent },
          { path: 'pies/:id', component: ResponsiveOrderComponent },
          { path: 'contact', component: ResponsiveContactComponent },
          { path: '**', component: PageNotFoundComponent },
        ]
      },
      { path: '', redirectTo: 'home', },
      { path: '**', component: PageNotFoundComponent }
    ],
  },
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    ThietKeWebComponent,
    WelcomePageComponent,
    CascadeCssRuleComponent,
    HomePageComponent,
    ResponsiveSiteComponent,
    ResponsiveHomeComponent,
    ResponsiveContactComponent,
    ResponsivePiesComponent,
    ResponsiveOrderComponent,
  ],
  imports: [
    CommonModule,
    SharingModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ThietKeWebModule { }
