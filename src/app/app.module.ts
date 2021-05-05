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

@NgModule({
  declarations: [
    AppComponent,
    OpenclosedComponent,
    Codetogether1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharingModule,
    BrowserAnimationsModule,
    TestModule
  ],
  providers: [{ provide: 'BaseUrl', useValue: BaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
