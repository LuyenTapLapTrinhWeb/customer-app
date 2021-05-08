import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class IntroductionComponent implements OnInit {
  moduleOverview: string;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.moduleOverview = 'http://localhost:3000/svg/module_overview.svg';
    this.matIconRegistry.addSvgIcon(
      'module_overview',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.moduleOverview)
    );
  }

  ngOnInit(): void {
  }

}
