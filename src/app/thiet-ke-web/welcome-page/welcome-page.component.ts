import { ImageUrl } from './../imageUrl';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  welcomeBanner: ImageUrl;
  welcomeContent: ImageUrl;
  constructor() {
    this.welcomeBanner = { src: 'assets/thiet-ke-web-luyen-tap-layout/welcome/welcome-banner.png', alt: 'welcome-banner.png' }
    this.welcomeContent = { src: 'assets/thiet-ke-web-luyen-tap-layout/welcome/lay-hung-hien.png', alt: 'lay-hung-hien.png' }
  }

  ngOnInit(): void {
  }

}
