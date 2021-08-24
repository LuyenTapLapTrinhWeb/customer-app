import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenListButton } from '../screen-list-service/screen-list-button.interface';

@Component({
  selector: 'app-screen-list-button',
  templateUrl: './screen-list-button.component.html',
  styleUrls: ['./screen-list-button.component.scss', '../screen-list-service/screen-list.scss']
})
export class ScreenListButtonComponent implements OnInit {
  @Input() screenListButton!: ScreenListButton;
  @Output() buttonEventEmitter = new EventEmitter<MouseEvent>();
  codeExample!: string;
  constructor() { }

  ngOnInit(): void {
    this.codeExample = `<app-screen-list-button [screenListButton]='screenListButton' (click)="onClickEventEmitter(button)"></app-screen-list-button>`;
  }
  emit(event: MouseEvent): void {
    this.buttonEventEmitter.emit(event);
  }
}
