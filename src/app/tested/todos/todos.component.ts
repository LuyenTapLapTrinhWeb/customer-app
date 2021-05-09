import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Event } from '@angular/router';
import { focusPanel, itemEnter, note } from 'src/app/animations/reuse/todos.animation';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    focusPanel(), note(), itemEnter()
  ]
})
export class TodosComponent implements OnInit, AfterViewInit {
  state = 'inactive';
  subsItems: string[];
  @ViewChild('viewchildinput') viewchildinput: ElementRef;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private cd: ChangeDetectorRef) {
  }
  ngAfterViewInit(): void {
    // console.log(this.viewchildinput);
    this.viewchildinput.nativeElement.focus();
  }
  ngOnInit(): void {
    this.subsItems = [
      'start the new app project',
      'work on blog',
      'lunch at 1pm'
    ];
  }
  toggleFocus(): void {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.cd.detectChanges();
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
