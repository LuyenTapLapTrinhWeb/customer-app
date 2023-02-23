import { Component, OnInit } from '@angular/core';
import { flyInOut } from './animations/reuse/app.animation';
import { Sticky } from './services/stickyElement/sticky.interface';

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
export class AppComponent implements OnInit {
  showFiller = false;
  title = 'customer-app';
  links = [
    { url: 'customers' },
    { url: 'orders' }
  ];
  constructor() {
  }
  ngOnInit(): void {

  }
}
