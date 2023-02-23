import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { isScreenSmallService } from 'src/app/services/isScreenSmall.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: [
    './aside.component.scss',
  ]
})
export class AsideComponent implements OnInit, AfterViewInit {
  version = "4.0";
  isScreenSmall!: boolean;
  @ViewChild('myUL') myUl!: any;
  constructor(
    private isScreenSmallService: isScreenSmallService,
  ) { }
  ngAfterViewInit(): void {
    this.onTreeviewClick();
  }
  ngOnInit(): void {
    this.isScreenSmall = this.isScreenSmallService.isScreenSmalls();
  }
  onTreeviewClick() {
    let i: number;
    // console.log(`this.myUl`, this.myUl.nativeElement.getElementsByClassName("caret-container"));
    let carets = this.myUl.nativeElement.getElementsByClassName("caret-container");
    console.log(carets);
    for (i = 0; i < carets.length; i++) {
      let caretsContainer = carets[i];

      caretsContainer.addEventListener("click", function () {

        let caret = caretsContainer.querySelector(".caret")!;
        let nested = caretsContainer.querySelector(".nested")!;
        // if (caret.click()) {
        caret.classList.add("caret-down");
        nested.classList.add("active");
        // }
      });
      // caretsContainer.removeEventListener("click", this.on)
    }
  }
}
