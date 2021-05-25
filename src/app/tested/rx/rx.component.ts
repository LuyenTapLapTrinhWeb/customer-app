import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';

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
    const timer$ = new Observable(subscribe => {
      let i = 0;
      const intervalID = setInterval(() => {
        subscribe.next(i++);
      }, 1000);
      return () => {
        console.log('Executing teardown code.');
        clearInterval(intervalID);
      };
    });

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
