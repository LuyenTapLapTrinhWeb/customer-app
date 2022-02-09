import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ComboboxAutocompleteTableComponent } from './combobox-autocomplete-table/combobox-autocomplete-table.component';
import { IdUploadModalComponent } from './id-upload-modal/id-upload-modal.component';
import { ScreenBarComponent } from './screen-list-bar/screen-bar.component';
import { ScreenListButtonComponent } from './screen-list-button/screen-list-button.component';
import { ScreenListGuideComponent } from './screen-list-guide/screen-list-guide.component';
import { ScreenListInputSearchComponent } from './screen-list-input-search/screen-list-input-search.component';
import { ScreenListSearchSelectionComponent } from './screen-list-selection/screen-list-selection.component';
import { TableReuseableComponent } from './screen-list-table-reuseable-guide/table-reuseable.component';
import { ScreenListTableComponent } from './screen-list-table/screen-list-table.component';
import { ScreenListToggleComponent } from './screen-list-toggle/screen-list-toggle.component';





@NgModule({
  declarations: [
    ScreenListTableComponent,
    ScreenBarComponent,
    ScreenListSearchSelectionComponent,
    ScreenListButtonComponent,
    ScreenListToggleComponent,
    ScreenListGuideComponent,
    ScreenListInputSearchComponent,
    TableReuseableComponent,
    ComboboxAutocompleteTableComponent,
    IdUploadModalComponent,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ScreenListTableComponent,
    ScreenBarComponent,
    ScreenListSearchSelectionComponent,
    ScreenListButtonComponent,
    ScreenListToggleComponent,
    ScreenListGuideComponent,
    ScreenListInputSearchComponent,
    TableReuseableComponent,
    ComboboxAutocompleteTableComponent,
    IdUploadModalComponent,
  ]
})
export class DesignModule { }
