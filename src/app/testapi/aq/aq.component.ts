import { Component, OnInit } from '@angular/core';
import { AnhQuan } from '../model/anhquan';
import { LichthisvService } from '../services/lichthisv.service';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';

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
  constructor(private lichthisvservice: LichthisvService) { this.state = 'hidden'; }

  ngOnInit(): void {
    this.lichthisvservice.getAnhQuans().subscribe(anhquans => { this.anhquans = anhquans; this.state = 'show'; });
  }

}
