import { NgModule } from '@angular/core';
import { ScreenListBarComponent } from '../screen-list-bar/screen-bar.component';
import { ScreenListButtonComponent } from '../screen-list-button/screen-list-button.component';
import { ScreenListGuideComponent } from '../screen-list-guide/screen-list-guide.component';
import { ScreenListToggleComponent } from '../screen-list-toggle/screen-list-toggle.component';
import { ScreenListSearchSelectionComponent } from '../screen-list-selection/screen-list-selection.component';
import { ScreenListTableComponent } from '../screen-list-table/screen-list-table.component';
import { ScreenListTableGuideComponent } from '../screen-list-table-guide/screen-list-table.component';
import { ScreenListInputSearchComponent } from '../screen-list-input-search/screen-list-input-search.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    ScreenListBarComponent,
    ScreenListButtonComponent,
    ScreenListGuideComponent,
    ScreenListToggleComponent,
    ScreenListSearchSelectionComponent,
    ScreenListTableComponent,
    ScreenListTableGuideComponent,
    ScreenListInputSearchComponent
  ],
  imports: [MaterialModule],
  exports: []
})
export class ScreenListModule { }
