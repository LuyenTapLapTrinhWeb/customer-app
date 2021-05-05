import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({ transform: 'scale(1)' })),
      state('active', style({ transform: 'scale(1.04)' })),
      transition('inactive=>active', animate('500ms ease-in')),
      transition('active=>inactive', animate('500ms ease-out')),
    ]),
    trigger('note', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      transition('inactive=>active', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.6 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ]),
      transition('active=>inactive', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateY(100%)', offset: 1 }),
        ]))
      ]),
    ]),
    trigger('itemEnter', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void=>*', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms ease-in')
      ]),
      transition('*=>void', [
        style({ transform: 'translateY(200px) scaleY(0)' }),
        animate('300ms ease-out')
      ]),
    ])
  ]
})
export class TodosComponent implements OnInit {
  state = 'inactive';
  subsItems: string[];
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  ngOnInit(): void {
    this.subsItems = [
      'start the new app project',
      'work on blog',
      'lunch at 1pm'
    ]
  }
  toggleFocus(): void {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
  submititem(event: any): void {
    if (!event.target.value) {
      return;
    }

    this.subsItems.unshift(event.target.value);
    // // Ascending
    // this.subsItems.sort((a, b) => 0 - (a > b ? -1 : 1));

    event.target.value = '';
  }
  removeItem(event: any, i): void {
    this.subsItems.splice(i, 1);
  }
}
