import { AfterViewInit, Component } from '@angular/core';
import { flyInOut } from './animations/reuse/app.animation';
import { OffsetService } from './services/stickyElement/offset.service';
import { StickyElement } from './services/stickyElement/stickyElement.service';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './services/stickyElement/sticky.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block'
  },
  animations: [flyInOut()]
})
export class AppComponent implements AfterViewInit {
  showFiller = false;

  title = 'customer-app';
  links = [
    { url: 'customers' },
    { url: 'orders' }
  ];
  nav: StickyElement;
  constructor(
    private offsetService: OffsetService
  ) {

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.nav = this.offsetService.onActionSticky();
      console.log(this.nav);
    }, 2000);
  }
  getOffset(offset: number): void {
    console.log(offset);
    this.nav.onElementStickiesOffset(offset);
  }
}
