import { Component, OnInit } from '@angular/core';
import { ImageUrl } from '../imageUrl';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  images: ImageUrl[];
  constructor() {
    this.images = [];
    for (let i = 1; i <= 12; i++) {
      let imgUrl: ImageUrl = { src: `assets/pies/${i}.png`, alt: `${i}.png` }
      this.images.push(imgUrl);
    }
    console.log(this.images)
  }


  ngOnInit(): void {
  }

}
