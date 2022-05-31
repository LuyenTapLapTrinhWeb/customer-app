import { Component, OnInit } from '@angular/core';
import { Pie, PIES } from './pie.interface';

@Component({
  selector: 'app-responsive-pies',
  templateUrl: './responsive-pies.component.html',
  styleUrls: ['./responsive-pies.component.scss']
})
export class ResponsivePiesComponent implements OnInit {
  items: Pie[] = PIES;
  constructor() { }

  ngOnInit(): void {
    console.log(this.items)
  }

}
