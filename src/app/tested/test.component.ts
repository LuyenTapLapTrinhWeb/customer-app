import { Component, OnInit } from '@angular/core';
import { flyInOut, myFadeInTrigger, toggleTrigger, visibility } from '../animations/reuse/app.animation';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block'
  },
  animations: [
    visibility(),
    toggleTrigger(),
    myFadeInTrigger(),
    flyInOut()
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
