import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScreenListModule } from '../design/screen-list-module/screen-list.module';
import { HightlightDirective } from '../directives/hightlight.directive';
import { StickyDirective } from '../services/stickyElement/sticky.directive';



@NgModule({
  declarations: [HightlightDirective, StickyDirective],
  exports: [HightlightDirective, StickyDirective, FormsModule, ScreenListModule]
})
export class SharingModule { }
