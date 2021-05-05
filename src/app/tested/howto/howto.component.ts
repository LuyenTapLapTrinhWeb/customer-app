import { Component, OnInit } from '@angular/core';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss'],
  animations: [transitionPage()]
})
export class HowtoComponent implements OnInit {

  state: string;
  constructor() {
    this.state = 'in';
  }

  ngOnInit(): void {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
