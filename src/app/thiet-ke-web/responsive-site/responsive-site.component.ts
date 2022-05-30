import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-responsive-site',
  templateUrl: './responsive-site.component.html',
  styleUrls: ['./responsive-site.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ResponsiveSiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
