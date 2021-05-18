import { Component, OnInit } from '@angular/core';
import { AnhQuan } from '../model/anhquan';
import { LichthisvService } from '../services/lichthisv.service';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-aq',
  templateUrl: './aq.component.html',
  styleUrls: ['./aq.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block'
  },
  animations: [
    visibility(),
    flyInOut(),
    toggleTrigger()
  ]
})
export class AqComponent implements OnInit {
  anhquans: AnhQuan[];
  state: string;
  moduleOverview2: string;
  moduleOverview3: string;
  moduleOverview4: string;
  constructor(
    private lichthisvservice: LichthisvService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.state = 'hidden';
    this.moduleOverview2 = 'http://localhost:3000/svg/LICHTHI.svg';
    this.moduleOverview3 = 'http://localhost:3000/svg/DIEMTHI.svg';
    this.moduleOverview4 = 'http://localhost:3000/svg/THOIKHOABIEU.svg';
    this.matIconRegistry.addSvgIcon(
      'LICHTHI',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.moduleOverview2)
    );
    this.matIconRegistry.addSvgIcon(
      'DIEMTHI',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.moduleOverview3)
    );
    this.matIconRegistry.addSvgIcon(
      'THOIKHOABIEU',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.moduleOverview4)
    );
  }

  ngOnInit(): void {
    this.lichthisvservice.getAnhQuans().subscribe(anhquans => { this.anhquans = anhquans; this.state = 'show'; });
  }

}
