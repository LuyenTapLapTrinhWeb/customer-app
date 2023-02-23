import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class TestapiComponent implements OnInit, AfterViewInit {
  title: string;
  subtitle: string;
  src: string;
  moduleOverview: string;
  code = { code: '', code1: '', filename: 'testapi-routing.module.ts' };
  @ViewChild('coding') coding: ElementRef;
  @ViewChild('video') video: ElementRef;
  @ViewChild('list') list: ElementRef;
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
  ngAfterViewInit(): void {
    const tab = document.getElementsByClassName('tab');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove('show');
      tab[i].classList.add('hide');
    }
    tab[0].classList.add('show');
    this.list.nativeElement.children[0].classList.add('active');
  }

  ngOnInit(): void {
    this.title = 'welcome to test api';
    this.subtitle = 'This is a test api from anh quan technology company has been sent to Sok Kim Thanh.';
    this.src = 'https://portal.aqtech.vn/uploads/Banner/Logo_AQTech.png';
    this.code.code = `import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { AqComponent } from './aq/aq.component';
    import { DetailLichthisvComponent } from './aq/detail-lichthisv/detail-lichthisv.component';
    import { LichthisvComponent } from './aq/lichthisv/lichthisv.component';
    import { TestapiComponent } from './testapi.component';

    const routes: Routes = [
      { path: '', component: TestapiComponent },
      { path: 'aq', component: AqComponent },
      { path: 'aq/lichthisv', component: LichthisvComponent },
      { path: 'aq/lichthisv/:bmssv', component: DetailLichthisvComponent },
      { path: '**', redirectTo: '' }
    ];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class TestapiRoutingModule { }
    `;
    this.code.code1 = `import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { AqComponent } from './aq/aq.component';
    import { DetailLichthisvComponent } from './aq/detail-lichthisv/detail-lichthisv.component';
    import { LichthisvComponent } from './aq/lichthisv/lichthisv.component';
    import { TestapiComponent } from './testapi.component';

    const routes: Routes = [
      { path: '', component: TestapiComponent },
      { path: 'aq', component: AqComponent },
      // { path: 'aq/lichthisv', component: LichthisvComponent },
      // { path: 'aq/lichthisv/:bmssv', component: DetailLichthisvComponent },
      { path: '**', redirectTo: '' }
    ];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class TestapiRoutingModule { }
    `;
  }

  getTabs(tabId, evt): void {
    const tab = document.getElementsByClassName('tab');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove('show');
      tab[i].classList.add('hide');
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.list.nativeElement.childElementCount; i++) {
      this.list.nativeElement.children[i].classList.remove('active');
    }
    tab[tabId].classList.add('show');
    this.coding.nativeElement.style.display = 'block';
    evt.currentTarget.classList.add('active');
  }
}

