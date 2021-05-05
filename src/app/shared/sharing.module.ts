import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HightlightDirective } from '../directives/hightlight.directive';



@NgModule({
  declarations: [HightlightDirective],
  exports: [HightlightDirective, FormsModule]
})
export class SharingModule { }
