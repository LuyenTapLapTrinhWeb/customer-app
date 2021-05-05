import { Component, OnInit } from '@angular/core';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [transitionPage()]
})
export class ExamplesComponent implements OnInit {
  state: string;
  constructor() {
    this.state = 'in';
  }

  ngOnInit(): void {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
