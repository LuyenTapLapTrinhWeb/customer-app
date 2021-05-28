import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-canceling-oservation',
  templateUrl: './canceling-oservation.component.html',
  styleUrls: ['./canceling-oservation.component.scss']
})
export class CancelingOservationComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
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
