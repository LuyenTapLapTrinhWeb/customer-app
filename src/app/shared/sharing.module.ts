import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DesignModule } from '../design/design.module';
import { HightlightDirective } from '../directives/hightlight.directive';
import { StickyDirective } from '../services/stickyElement/sticky.directive';



@NgModule({
  declarations: [HightlightDirective, StickyDirective],
  imports: [DesignModule],
  exports: [HightlightDirective, StickyDirective, FormsModule, DesignModule]
})
export class SharingModule { }
