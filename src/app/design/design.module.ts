import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ScreenBarComponent } from './screen-list-bar/screen-bar.component';
import { ScreenListButtonComponent } from './screen-list-button/screen-list-button.component';
import { ScreenListGuideComponent } from './screen-list-guide/screen-list-guide.component';
import { ScreenListInputSearchComponent } from './screen-list-input-search/screen-list-input-search.component';
import { ScreenListComponent } from './screen-list-search/screen-list-search.component';
import { ScreenListSearchSelectionComponent } from './screen-list-selection/screen-list-selection.component';
import { TableReuseableComponent } from './screen-list-table-reuseable-guide/table-reuseable.component';
import { ScreenListTableComponent } from './screen-list-table/screen-list-table.component';
import { ScreenListToggleComponent } from './screen-list-toggle/screen-list-toggle.component';





@NgModule({
  declarations: [
    ScreenListTableComponent,
    ScreenListComponent,
    ScreenBarComponent,
    ScreenListSearchSelectionComponent,
    ScreenListButtonComponent,
    ScreenListToggleComponent,
    ScreenListGuideComponent,
    ScreenListInputSearchComponent,
    TableReuseableComponent,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ScreenListTableComponent,
    ScreenListComponent,
    ScreenBarComponent,
    ScreenListSearchSelectionComponent,
    ScreenListButtonComponent,
    ScreenListToggleComponent,
    ScreenListGuideComponent,
    ScreenListInputSearchComponent,
    TableReuseableComponent,
  ]
})
export class DesignModule { }
