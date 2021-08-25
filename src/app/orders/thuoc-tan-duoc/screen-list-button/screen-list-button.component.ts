import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SvgIconLiteralService } from 'src/app/services/SvgIconLiteralts/svgIconLiteral.service';
import { ADDING, MOUSECLICKMODE } from './screen-list-button.data';
import { ScreenListButton } from './screen-list-button.interface';

@Component({
  selector: 'app-screen-list-button',
  templateUrl: './screen-list-button.component.html',
  styleUrls: ['./screen-list-button.component.scss', '../screen-list-service/screen-list.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ScreenListButtonComponent implements OnInit {
  svgIcon!: string;
  @Input() screenListButton!: ScreenListButton;
  @Output() buttonEventEmitter = new EventEmitter<MouseEvent>();
  codeExample!: string;
  codeExampleFile!: string;
  codeExampleFile2!: string;
  codeFileName!: string;
  codeObjectName!: string;
  codeObjectNameEventEmitter!: string;
  codeTagName!: string;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.screenListButton) {
      this.huongdan();
      return;
    } else {
      console.log('this.screenListButton', this.screenListButton);
      this.svgIcon = this.screenListButton.svgIcon;
    }
  }
  huongdan(): void {
    this.codeObjectName = 'screenListButton';
    this.codeObjectNameEventEmitter = '(buttonEventEmitter)="onClickEventEmitter($event)"';
    this.codeExample = `<app-screen-list-button [screenListButton]='screenListButton' (buttonEventEmitter)="onClickEventEmitter($event)"></app-screen-list-button>`;
    this.codeExampleFile = `ngOnInit(): void {
      this.screenListButton = {
        mouseClickMode: MOUSECLICKMODE.ADDING,
        mouseClickEvent: MOUSECLICKEVENT.EVENT,
        svgIcon: 'ADD_ICON',
        active: true
      };
    }`;
    this.codeExampleFile2 = `ngOnInit(): void { this.screenListButton = ADDING | RELOADING | QUESTIONING; }`;
    this.codeFileName = 'screen-bar.component.ts';
    this.codeTagName = 'app-screen-list-button';
  }
  emit(event: MouseEvent): void {
    this.buttonEventEmitter.emit(event);
  }
}
