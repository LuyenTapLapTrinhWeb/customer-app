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
  codeFileName!: string;
  codeObjectName!: string;
  codeTagName!: string;

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
    this.codeExample = `<app-screen-list-button [screenListButton]='screenListButton' (buttonEventEmitter)="onClickEventEmitter($event)"></app-screen-list-button>`;
    this.codeExampleFile = `ngOnInit(): void {
      this.screenListButton = {
        mouseClickMode: MOUSECLICKMODE.ADDING,
        mouseClickEvent: MOUSECLICKEVENT.EVENT,
        svgIcon: 'ADD_ICON',
        active: true
      };
      // hoặc sử dụng thiết lập sẵn, có thể thêm thiết lập sẵn tương tự:
      this.screenListButton = ADDING | RELOADING | QUESTIONING;
    }`;
    this.codeFileName = 'screen-bar.component.ts';
    this.codeTagName = 'app-screen-list-button';
  }
  emit(event: MouseEvent): void {
    this.buttonEventEmitter.emit(event);
  }
}
