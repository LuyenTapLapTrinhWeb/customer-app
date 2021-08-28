import { Component, OnInit } from '@angular/core';
import { SvgIconLiteralService } from '../../SvgIconLiteralts/svgIconLiteral.service';
import { Sticky } from '../sticky.interface';

@Component({
  selector: 'app-sticky-huong-dan-su-dung',
  templateUrl: './sticky-huong-dan-su-dung.component.html',
  styleUrls: ['./sticky-huong-dan-su-dung.component.scss']
})
export class StickyHuongDanSudungComponent implements OnInit {
  appSticky!: Sticky;
  constructor(private svgService: SvgIconLiteralService) {
    this.svgService.addMatIconSvgCustomObservable('sticky-element-design');
  }

  ngOnInit(): void {
    this.appSticky = {
      stickyId: 'app-sticky-id',
      stickyClassName: 'navbar-sticky',
      stickyElementOffset: (document.getElementById('app-sticky-id') as HTMLElement).offsetTop,
      stickyElementHTML: (document.getElementById('app-sticky-id') as HTMLElement)
    };
  }

}
