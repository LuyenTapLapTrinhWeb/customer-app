import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ScreenListBar } from './screen-list-bar.interface';
import { ScreenListButton } from '../screen-list-button/screen-list-button.interface';

@Component({
  selector: 'app-screen-bar',
  templateUrl: './screen-bar.component.html',
  styleUrls: ['./screen-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenListBarComponent implements OnInit {
  panelOpenState!: boolean;
  @Input() screenListBar!: ScreenListBar;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onReloadingEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddingEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEditingEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeletingEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onQuestioningEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onExportExcelEventEmitter = new EventEmitter<MouseEvent>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPanelOpenStateEventEmitter = new EventEmitter<boolean>();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.panelOpenState = this.screenListBar.isPanelOpenState || false;
  }
  openPanelOpenState(panelOpenState: boolean): void {
    this.panelOpenState = !panelOpenState;
    this.cd.detectChanges();
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
      case 'editing':
        this.onClickEEE(button.mouseClickEvent, this.onEditingEventEmitter);
        break;
      case 'deleting':
        this.onClickEEE(button.mouseClickEvent, this.onDeletingEventEmitter);
        break;
      case 'exportexcel':
        this.onClickEEE(button.mouseClickEvent, this.onExportExcelEventEmitter);
        break;
      default:
        break;
    }
  }
  onClickEEE(event: MouseEvent | undefined, eventEmitter: EventEmitter<MouseEvent>): void {
    eventEmitter.emit(event);
  }
}
