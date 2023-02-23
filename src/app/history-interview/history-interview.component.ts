import { Component, OnInit } from '@angular/core';
import { HistoryInterview } from './history-interview';

@Component({
  selector: 'app-history-interview',
  templateUrl: './history-interview.component.html',
  styleUrls: ['./history-interview.component.scss']
})
export class HistoryInterviewComponent implements OnInit {
  histories: HistoryInterview[] = [
    { interviewTime: new Date(), companyName: 'ASC', src: 'assets/pv/113246.png' },
    { interviewTime: new Date(), companyName: 'bizmage', src: 'assets/pv/113315.png' },
    { interviewTime: new Date(), companyName: 'nashtech', src: 'assets/pv/113404.png' },
    { interviewTime: new Date(), companyName: 'favie', src: 'assets/pv/113510.png' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
