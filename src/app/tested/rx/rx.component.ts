import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timeDiv = document.getElementById('times');
    const button = document.getElementById('timerButton');
    const timer$ = interval(1000);

    const timerSubcritptions = timer$.subscribe(
      value => timeDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
      null,
      () => { console.log('All done!'); }
    );
    fromEvent(button, 'click').subscribe(event => {
      timerSubcritptions.unsubscribe();
    });
  }

}
