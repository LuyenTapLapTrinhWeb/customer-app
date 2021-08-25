import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ScreenListBar } from './screen-list-bar.interface';
import { MOUSECLICKMODE } from '../screen-list-button/screen-list-button.data';
import { ScreenListButton } from '../screen-list-button/screen-list-button.interface';
import { SvgIconLiteralService } from 'src/app/services/SvgIconLiteralts/svgIconLiteral.service';

@Component({
  selector: 'app-screen-bar',
  templateUrl: './screen-bar.component.html',
  styleUrls: ['./screen-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenBarComponent implements OnInit {
  @Input() screenListBar!: ScreenListBar;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onReloadingEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddingEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onQuestioningEventEmitter = new EventEmitter<MouseEvent>();

  constructor(
  ) { }

  ngOnInit(): void {

  }

  onClickEventEmitter(button: ScreenListButton): void {
    switch (button.mouseClickMode) {
      case 'questioning':
        this.onClickEEE(button.mouseClickEvent, this.onQuestioningEventEmitter);
        break;
      case 'reloading':
        this.onClickEEE(button.mouseClickEvent, this.onReloadingEventEmitter);
        break;
      case 'adding':
        this.onClickEEE(button.mouseClickEvent, this.onAddingEventEmitter);
        break;
      default:
        break;
    }
  }
  onClickEEE(event: MouseEvent | undefined, eventEmitter: EventEmitter<MouseEvent>): void {
    eventEmitter.emit(event);
  }
}
