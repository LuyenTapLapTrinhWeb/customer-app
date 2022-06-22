import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-responsive-order',
  templateUrl: './responsive-order.component.html',
  styleUrls: ['./responsive-order.component.scss']
})
export class ResponsiveOrderComponent implements OnInit {
  id: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id)
    });
  }
}
