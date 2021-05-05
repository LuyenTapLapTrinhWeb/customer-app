import { Component } from '@angular/core';
import { flyInOut } from './animations/reuse/app.animation';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display:block'
  },
  animations: [flyInOut()]
})
export class AppComponent {
  showFiller = false;

  title = 'customer-app';
  links = [
    { url: 'customers' },
    { url: 'orders' }
  ];
}
