import { Component, OnInit } from '@angular/core';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';

@Component({
  selector: 'app-comunicating',
  templateUrl: './comunicating.component.html',
  styleUrls: ['./comunicating.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class ComunicatingComponent implements OnInit {
  moduleOverview: string;

  constructor(
  ) {
  }

  ngOnInit(): void {

  }
}
