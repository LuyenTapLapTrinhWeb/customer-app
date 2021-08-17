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
    const offset = this.window?.pageYOffset || this.document?.documentElement.scrollTop
      || this.document?.body.scrollTop || 0;
    // console.log('offset', offset);
    // Get the offset position of the navbar
    const elementById = document.getElementById(this.appSticky.stickyId) as HTMLElement;
    // console.log(elementById);

    /* stickyaside stickydrawersidenav sticky*/
    const elementOffset = elementById.offsetTop;
    // console.log(elementOffset);
    const sticky = {
      offset: offset || 0,
      offsetStickyElement: elementOffset,
      stickyElement: elementById,
      stickyClassName: this.appSticky.stickyClassName,
      stickyId: this.appSticky.stickyId
    };
    this.stickyService.onElementSticky(sticky);
  }
}
