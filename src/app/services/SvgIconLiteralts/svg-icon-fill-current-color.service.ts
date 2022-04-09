import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractSvgIconFillCurrentColor, ISvgIconFillCurrentColor } from './svgIconLiteral.interface';

@Injectable({
  providedIn: 'root'
})
export class SvgIconFillCurrentColorService extends AbstractSvgIconFillCurrentColor {
  currentRouterLink: string;
  constructor(private router: Router) {
    super();
    this.currentRouterLink = this.router.url.split('/')[2];
  }
  hoverSvgIcon(svg: ISvgIconFillCurrentColor, event: Event): void {
    // console.log(event);
    if (event.type === 'mouseover') {
      svg.isSvgIconHover = true;
    } else if (event.type === 'mouseout' || 'mouseleave') {
      svg.isSvgIconHover = false;
    }
  }
  activeSvgIcon(svg: ISvgIconFillCurrentColor, event: Event, svgs: ISvgIconFillCurrentColor[]): void {
    // reset all false buttons active
    svgs.map(s => s.isSvgIconActive = false);
    // console.log(event);
    if (event.type === 'click') {
      svg.isSvgIconActive = true;
    }
  }
  getSvgIcon(svg: ISvgIconFillCurrentColor): string {
    // tslint:disable-next-line:max-line-length
    return svg.isSvgIconActive ? svg.svgIcon.svgIconNameActive : svg.isSvgIconHover ? svg.svgIcon.svgIconNameHover : svg.svgIcon.svgIconName;
  }
  getMaterialIcon(svg: ISvgIconFillCurrentColor): string {
    return svg.matIconMaterial.isMatIconMaterial ? svg.matIconMaterial.matIconCustomName : '';
  }
  getCurrentActiveRouterLink(svgIcons: ISvgIconFillCurrentColor[]): void {
    svgIcons.forEach((item: ISvgIconFillCurrentColor) => {
      if (item.routerLink === this.currentRouterLink) {
        item.isSvgIconActive = true;
        return;
      }
    });
  }
}
