import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss'],
})
export class RxComponent implements OnInit, AfterViewInit {
  navbar: HTMLElement;
  sticky: number;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // When the user scrolls the page, execute myFunction
    // window.onscroll = () => { this.myFunction(); };
    // Get the navbar
    // this.navbar = document.getElementById('navbar');
    // this.sticky = this.navbar.offsetTop;
    // fromEvent(this.navbar, 'scroll').subscribe(event => { this.myFunction(); });
  }
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // tslint:disable-next-line:typedef
  myFunction() {
    // Get the offset position of the navbar
    // if (window.pageYOffset >= this.sticky) {
    //   this.navbar.classList.add('sticky');
    // } else {
    //   this.navbar.classList.remove('sticky');
    // }
  }
}
