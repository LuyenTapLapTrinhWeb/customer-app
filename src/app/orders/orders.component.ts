import { OnChanges, SimpleChanges } from '@angular/core';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { flyInOut, toggleTrigger } from '../animations/reuse/app.animation';
import { SlideIn, Stretching } from './animation';

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
    flyInOut(),
    SlideIn(),
    Stretching()
  ]
})
export class OrdersComponent implements OnInit, OnChanges {
  circleState: string;
  squareState: string;
  sh: boolean;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.circleState = 'from';
    this.squareState = 'from';
    this.sh = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.circleState = 'to';
    this.squareState = 'to';
    this.sh = true;
    console.log(changes);
  }
  changeCircle(event: Event): void {
    this.circleState = 'to';
    this.squareState = 'to';
    // event.target.removeEventListener('mouseover');
  }
}
