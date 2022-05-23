import { ImageUrl } from './imageUrl';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thiet-ke-web',
  templateUrl: './thiet-ke-web.component.html',
  styleUrls: ['./thiet-ke-web.component.scss']
})
export class ThietKeWebComponent implements OnInit {
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
