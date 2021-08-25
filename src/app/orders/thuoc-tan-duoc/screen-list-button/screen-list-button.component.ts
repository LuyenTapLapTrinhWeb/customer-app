import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { SvgIconLiteralService } from 'src/app/services/SvgIconLiteralts/svgIconLiteral.service';
import { MOUSECLICKMODE } from './screen-list-button.data';
import { ScreenListButton } from './screen-list-button.interface';

@Component({
  selector: 'app-screen-list-button',
  templateUrl: './screen-list-button.component.html',
  styleUrls: ['./screen-list-button.component.scss', '../screen-list-service/screen-list.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ScreenListButtonComponent implements OnInit, AfterViewInit {
  svgIcon!: string;
  @Input() screenListButton!: ScreenListButton;
  @Output() buttonEventEmitter = new EventEmitter<MouseEvent>();
  codeExample!: string;
  codeExampleFile!: string;
  constructor(
    private svgIconService: SvgIconLiteralService
  ) {
    this.svgIconService.addMultiMatIconSvgCustomObservable(['ADD_ICON']);
  }
  ngAfterViewInit(): void {
    if (!this.screenListButton) {
      this.screenListButton = {
        mouseClickMode: MOUSECLICKMODE.ADDING,
        mouseClickEvent: MOUSECLICKMODE.EVENT,
        svgIcon: 'ADD_ICON',
        active: true
      };
    } else {
      console.log('this.screenListButton', this.screenListButton);
      this.svgIcon = this.screenListButton.svgIcon;
    }
  }

  ngOnInit(): void {
    this.codeExample = `<app-screen-list-button [screenListButton]='screenListButton' (buttonEventEmitter)="onClickEventEmitter($event)"></app-screen-list-button>`;
    this.codeExampleFile = `ngOnInit(): void {
      this.screenListButton = {
        mouseClickMode: MOUSECLICKMODE.ADDING,
        mouseClickEvent: MOUSECLICKMODE.EVENT,
        svgIcon: 'ADD_ICON',
        active: true
      };
    }`;
  }
  emit(event: MouseEvent): void {
    this.buttonEventEmitter.emit(event);
  }
}
