import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }
}
