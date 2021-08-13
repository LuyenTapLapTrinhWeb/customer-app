import { DOCUMENT } from '@angular/common';
import { Directive, EventEmitter, HostListener, Inject, Output } from '@angular/core';
import { OffsetService } from './offset.service';
import { StickyElement } from './stickyElement.service';
import { WINDOW } from './window.service';

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective {
  @Output() offset = new EventEmitter<number>();
  nav!: StickyElement;

  constructor(
    private stickyActionService: OffsetService,
    @Inject(DOCUMENT) private document?: Document,
    @Inject(WINDOW) private window?: Window,
  ) { }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.stickyActionService.offset = this.window.pageYOffset || this.document.documentElement.scrollTop
      || this.document.body.scrollTop || 0;
    this.offset.emit(this.stickyActionService.offset);
  }
}
