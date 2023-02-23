import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sutrixsolutions',
  templateUrl: './sutrixsolutions.component.html',
  styleUrls: ['./sutrixsolutions.component.scss']
})
export class SutrixSolutionsComponent implements OnInit {
  result: string;
  result2: string;
  keyboardString: string;
  constructor() { }

  ngOnInit(): void {
  }
  resersePerWord(): void {
    // tslint:disable-next-line:variable-name
    const org_str = this.keyboardString;
    // tslint:disable-next-line:variable-name
    const reverse_str = org_str.split('').reverse().join('');
    console.log(reverse_str);
    this.result = reverse_str;
  }
  resersePerWord2(): void {
    const r = this.result.split(' ');
    console.log(r);
    r.reverse();
    console.log(r);
    this.result2 = r.join(' ');
  }
}

