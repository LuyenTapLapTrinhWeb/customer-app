import { Component, OnInit } from '@angular/core';
import { flyInOut, toggleTrigger } from '../animations/reuse/app.animation';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block'
  },
  animations: [
    toggleTrigger(),
    flyInOut()
  ]
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
