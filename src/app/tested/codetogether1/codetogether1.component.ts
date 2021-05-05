import { Component, OnInit } from '@angular/core';
import { flyInOut, visibility } from 'src/app/animations/reuse/app.animation';

@Component({
  selector: 'app-codetogether1',
  templateUrl: './codetogether1.component.html',
  styleUrls: ['./codetogether1.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block'
  },
  animations: [
    visibility(),
    flyInOut()
  ]
})
export class Codetogether1Component implements OnInit {
  visibility = 'shown';
  constructor() { }

  ngOnInit(): void {
  }

}
