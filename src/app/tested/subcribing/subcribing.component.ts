import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-subcribing',
  templateUrl: './subcribing.component.html',
  styleUrls: ['./subcribing.component.scss']
})
export class SubcribingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // create a simple observable that emits three values
    const myObservable = of(1, 2, 3);

    // craete a observer object
    const myObserver = {
      next: (x: any) => console.log(`Observer got a value: ${x}`),
      error: (x: any) => console.log(`Observer got an error: ${x}`),
      complete: () => console.log(`Observer got a complete notification`),
    };
    myObservable.subscribe(myObserver);
  }

  // sequenceSubcriber(observer: any) {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);

  //   // unsubcribe function doesn't neet to do anything in this
  //   // because values are delivered synchronously synchronously

  //   return { unsubscribe() { } }
  // }

  // // create a new observable that will deliver the above sequenceSubcriber
  // const sequence = new Observable(sequenceSubscriber);

  // //execute the observable and print the result of  each notification

  // sequence.subcribe({
  //   next(num){ console.log(num); },
  //   complete() {console.log('finish sequence notification')}
  // })
}
