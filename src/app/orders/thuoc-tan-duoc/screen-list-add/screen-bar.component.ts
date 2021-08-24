import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ScreenListButton } from '../screen-list-service/screen-list-button.interface';
import { ScreenListBar } from '../screen-list-service/screen-list-bar.interface';

@Component({
  selector: 'app-screen-bar',
  templateUrl: './screen-bar.component.html',
  styleUrls: ['./screen-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenBarComponent {
  @Input() screenListBar!: ScreenListBar;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onReloadingEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddingEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onQuestioningEventEmitter = new EventEmitter<MouseEvent>();

  constructor() { }

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
