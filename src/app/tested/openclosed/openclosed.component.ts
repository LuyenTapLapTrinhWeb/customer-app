import { Component, OnInit } from '@angular/core';
import { myFadeInTrigger } from 'src/app/animations/reuse/app.animation';

@Component({
  selector: 'app-openclosed',
  templateUrl: './openclosed.component.html',
  styleUrls: ['./openclosed.component.scss'],
  animations: [
    myFadeInTrigger()
  ]
})
export class OpenclosedComponent implements OnInit {
  state = 'fadeIn';
  items: string[];
  constructor() { }

  ngOnInit(): void {
    this.items = ['item1', 'item2', 'item3'];
  }
  toggleState(): void {
    this.state = (this.state === 'small' ? 'large' : 'small');
    this.items.push('another item');
    this.state = 'fadeIn';
  }
}
