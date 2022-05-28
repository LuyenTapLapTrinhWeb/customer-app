import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cascade-css-rule',
  templateUrl: './cascade-css-rule.component.html',
  styleUrls: ['./cascade-css-rule.component.scss']
})
export class CascadeCssRuleComponent implements OnInit {
  codeSpecificity = `
h1 {
  color: red;
  font-size: 40px;
}
.heading {
  color: blue;
  font-size: 32px;
}
`
  codeInheritance = `
section {
  background: rgb(129, 7, 138);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  article {
      height: 200px;
      background: rgb(186, 40, 196);
      display: flex;
      align-items: center;
      justify-content: center;
      div {
          height: 100px;
          background: rgb(125, 51, 130);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
      }
  }
}
`
  constructor() { }

  ngOnInit(): void {
  }
  openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" actived", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " actived";
  }
}
