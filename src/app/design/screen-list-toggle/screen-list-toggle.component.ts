import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SCREENLISTGUIDETOGGLE } from '../screen-list-guide/screen-list-guide.data';
import { ScreenListGuideToggle } from '../screen-list-guide/screen-list-guide.interface';

@Component({
  selector: 'app-screen-list-toggle',
  templateUrl: './screen-list-toggle.component.html',
  styleUrls: ['./screen-list-toggle.component.scss']
})
export class ScreenListToggleComponent implements OnInit {
  checked = false;
  @Output() toggleEventEmitter = new EventEmitter<boolean>();
  @Input() toggleName!: string;
  @Input() IsHide = false;
  checkedValue!: string;
  screenListGuideToggle!: ScreenListGuideToggle;
  toggleLabel = { vie: { on: 'mở', off: 'tắt' }, eng: { on: 'on', off: 'off' } };
  toggle(event: MatSlideToggleChange): void {
    if (event.checked) {
      this.toggleEventEmitter.emit(event.checked);
      this.checkedValue = this.toggleLabel.vie.on.toUpperCase();
    } else {
      this.toggleEventEmitter.emit(event.checked);
      this.checkedValue = this.toggleLabel.vie.off.toUpperCase();
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.checkedValue = this.toggleLabel.vie.off.toUpperCase();
    if (!this.toggleName) {
      // this.toggleName = 'Vui lòng nhập tên tiêu đề';
      this.screenListGuideToggle = SCREENLISTGUIDETOGGLE;
      return;
    }
  }
}
