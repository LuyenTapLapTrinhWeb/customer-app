import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { Config } from './configUrl';
import { DownloaderService } from './downloader.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  animations: [
    trigger('transitionY', [
      state('inactive', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('active', style({ transform: 'translateX(0)', opacity: 1 })),
      // transition('inactive=>active', animate('500ms ease-in')),
      // transition('active=>inactive', animate('500ms ease-out')),
      transition('*=>*', [
        style({ transform: 'translateX(100%)', opacity: 1 }),
        animate('500ms ease-out')]
      )
    ])
  ]
})
export class ConfigComponent implements OnInit {
  configs: Config[];
  heroesURl: string;
  config: Config;
  headers: string[];
  contents: string;
  click: boolean;
  state: string;
  constructor(private configService: ConfigService, private downloaderService: DownloaderService) { }

  ngOnInit(): void {
    this.showConfig();
    // this.showHerorUrl();
    // this.showConfigResponse();
    this.click = false;
    this.state = 'inactive';
  }

  // tslint:disable-next-line:typedef
  showConfig() {
    this.configService.getConfigs().pipe(tap(data => { console.log(data); })).subscribe(
      (configs: Config[]) => {
        this.configs = configs;
      }
    );
  }
  // tslint:disable-next-line:typedef
  showHerorUrl() {
    this.configService.getConfigs().pipe(
      map((configs: Config[]) => {
        configs.map(client => { this.heroesURl = client.heroesUrl; });
      })
    );
  }
  // tslint:disable-next-line:typedef
  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ...resp.body };
      });
  }
  // tslint:disable-next-line:typedef
  download() {
    this.click = !this.click;
    if (this.click === false) {
      return;
    }
    this.downloaderService.getTextFile('assets/textfile.txt')
      .subscribe(
        results => {
          this.contents = results; this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        },
        error => { console.log(error.message); }
      );
  }
}
