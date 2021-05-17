import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
  },
  animations: [
    visibility(),
    flyInOut(),
    toggleTrigger()
  ]
})
export class TestapiComponent implements OnInit {
  title: string;
  subtitle: string;
  src: string;
  moduleOverview: string;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.moduleOverview = 'http://localhost:3000/svg/Logo Anh Quan.svg';
    this.matIconRegistry.addSvgIcon(
      'Logo_Anh_Quan',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.moduleOverview)
    );
  }

  ngOnInit(): void {
    this.title = 'welcome to test api';
    this.subtitle = 'This is a test api from anh quan technology company has been sent to Sok Kim Thanh.';
    this.src = 'https://portal.aqtech.vn/uploads/Banner/Logo_AQTech.png';
  }
}
