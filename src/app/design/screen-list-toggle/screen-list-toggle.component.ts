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
  checkedValue!: string;
  screenListGuideToggle!: ScreenListGuideToggle;
  toggle(event: MatSlideToggleChange): void {
    if (event.checked) {
      this.toggleEventEmitter.emit(event.checked);
      this.checkedValue = 'ON';
    } else {
      this.toggleEventEmitter.emit(event.checked);
      this.checkedValue = 'OFF';
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.checkedValue = 'OFF';
    if (!this.toggleName) {
      // this.toggleName = 'Vui lòng nhập tên tiêu đề';
      this.screenListGuideToggle = SCREENLISTGUIDETOGGLE;
      return;
    }
  }
}
