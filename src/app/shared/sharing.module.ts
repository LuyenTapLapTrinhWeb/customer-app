import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HightlightDirective } from '../directives/hightlight.directive';
import { StickyDirective } from '../services/stickyElement/sticky.directive';



@NgModule({
  declarations: [HightlightDirective, StickyDirective],
  exports: [HightlightDirective, StickyDirective, FormsModule]
})
export class SharingModule { }
