import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Pie, PIES } from './pie.interface';

@Component({
  selector: 'app-responsive-pies',
  templateUrl: './responsive-pies.component.html',
  styleUrls: ['./responsive-pies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResponsivePiesComponent implements OnInit {
  items: Pie[] = PIES;
  orderButtons = document.querySelectorAll('button[data-order]');
  constructor(private route: Router) { }

  ngOnInit(): void {

  }
  order(e: Event) {
    const button = e.currentTarget as HTMLButtonElement;
    const container = button.parentNode;

    const order = {
      id: button.getAttribute('id'),
      title: container.querySelector('.title').innerHTML,
      price: container.querySelector('.price').innerHTML,
      desc: container.querySelector('.desc').innerHTML,
    }
    // console.log(order);
    // console.log("vaoday", button);
    localStorage.setItem('order', JSON.stringify(order));
    // const url = "order"
    // this.route.navigateByUrl('/thiet-ke-web-luyentap/responsive/' + url);
  }
}
