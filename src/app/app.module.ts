import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BaseUrl } from './shared/baseURL';
import { SharingModule } from './shared/sharing.module';
import { OpenclosedComponent } from './tested/openclosed/openclosed.component';
import { Codetogether1Component } from './tested/codetogether1/codetogether1.component';
import { TestModule } from './tested/test.module';
import { TestapiModule } from './testapi/testapi.module';
import { WINDOW_PROVIDERS } from './services/stickyElement/window.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginator } from './services/CustomPaginatorConfiguration';
import { StickyHuongDanSudungComponent } from './services/stickyElement/sticky-huong-dan-su-dung/sticky-huong-dan-su-dung.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './404/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenclosedComponent,
    Codetogether1Component,
    StickyHuongDanSudungComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    SharingModule,
    TestModule,
    TestapiModule,
  ],
  providers: [
    WINDOW_PROVIDERS,
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    { provide: 'BaseUrl', useValue: BaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
