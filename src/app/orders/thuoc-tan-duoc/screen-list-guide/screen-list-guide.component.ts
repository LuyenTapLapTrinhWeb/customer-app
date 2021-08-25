import { Component, Input, OnInit } from '@angular/core';
import { ScreenListGuide, ScreenListGuideButton, ScreenListGuideSelection, ScreenListGuideToggle } from './screen-list-guide.interface';

@Component({
  selector: 'app-screen-list-guide',
  templateUrl: './screen-list-guide.component.html',
  styleUrls: ['./screen-list-guide.component.scss']
})
export class ScreenListGuideComponent implements OnInit {
  @Input() screenListGuideButton!: ScreenListGuideButton;
  @Input() screenListGuideSelection!: ScreenListGuideSelection;
  @Input() screenListGuideToggle!: ScreenListGuideToggle;
  screenlistguide!: ScreenListGuide;
  constructor() { }

  ngOnInit(): void {
    if (!this.screenlistguide) {
      this.screenlistguide = {
        button: this.screenListGuideButton,
        selection: this.screenListGuideSelection,
        toggle: this.screenListGuideToggle,
      };
    }
  }
}
