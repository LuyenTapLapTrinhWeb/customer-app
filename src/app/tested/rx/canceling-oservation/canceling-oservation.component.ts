import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-canceling-oservation',
  templateUrl: './canceling-oservation.component.html',
  styleUrls: ['./canceling-oservation.component.scss']
})
export class CancelingOservationComponent implements OnInit, OnChanges {
  @ViewChild('timeDiv') timeDiv: HTMLElement;
  @ViewChild('timerButton') button: HTMLElement;
  constructor() { }

  ngOnInit(): void {


  }
  ngOnChanges(): void {
    if (document.getElementById('times') != null) {
      this.timeDiv = document.getElementById('times');
    }
    if (document.getElementById('timerButton') != null) {
      this.button = document.getElementById('timerButton');
    }
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
    const cancelTimes$ = fromEvent(this.button, 'click');
    timer$.pipe(
      takeUntil(cancelTimes$)
    ).subscribe(
      value => {
        this.timeDiv.innerHTML = this.timeDiv.innerHTML + `${new Date().toLocaleTimeString()} (${value}) <br>`;
      },
      null,
      () => { console.log('All done!'); }
    );
  }
}
