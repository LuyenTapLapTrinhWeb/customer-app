import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, Input } from '@angular/core';
import { Sticky } from './sticky.interface';
import { StickyService } from './sticky.service';
import { WINDOW } from './window.service';

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective {
  @Input() appSticky!: Sticky;

  constructor(
    private stickyService: StickyService,
    @Inject(DOCUMENT) private document?: Document,
    @Inject(WINDOW) private window?: Window,
  ) { }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.appSticky) {
      this.setStickiesElement();
    }
  }
  setStickiesElement(): void {
    const offsetCurrentWindow = this.window?.pageYOffset || this.document?.documentElement.scrollTop
      || this.document?.body.scrollTop || 0;
    const sticky = {
      offsetCurrentWindow: offsetCurrentWindow || 0,
      stickyElementOffset: this.appSticky.stickyElementOffset,
      stickyElementHTML: this.appSticky.stickyElementHTML,
      stickyClassName: this.appSticky.stickyClassName,
      stickyId: this.appSticky.stickyId
    };
    this.stickyService.onElementSticky(sticky);
  }
}
