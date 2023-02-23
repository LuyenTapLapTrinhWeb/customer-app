import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-responsive-home',
  templateUrl: './responsive-home.component.html',
  styleUrls: ['./responsive-home.component.scss'],
})
export class ResponsiveHomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  gotopies() {
    this.route.navigateByUrl('/thiet-ke-web-luyentap/responsive/pies')
  }
}
