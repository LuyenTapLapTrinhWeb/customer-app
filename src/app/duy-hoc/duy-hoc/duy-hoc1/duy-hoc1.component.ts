import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-duy-hoc1',
  templateUrl: './duy-hoc1.component.html',
  styleUrls: ['./duy-hoc1.component.scss']
})
export class DuyHoc1Component implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    console.log(id);
  }

}
