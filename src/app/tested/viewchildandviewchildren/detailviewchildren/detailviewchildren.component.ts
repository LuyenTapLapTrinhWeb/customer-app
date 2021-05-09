import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { DetailviewchildService } from './detailviewchild.service';
import { Viewchildrend } from './detailviewchildren';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';

@Component({
  selector: 'app-detailviewchildren',
  templateUrl: './detailviewchildren.component.html',
  styleUrls: ['./detailviewchildren.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class DetailviewchildrenComponent implements OnInit {
  id: number;
  viewchildrend: Viewchildrend;
  constructor(
    private route: ActivatedRoute,
    private detailviewchildrenService: DetailviewchildService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.detailviewchildrenService.getViewchild(this.id)
        .pipe(tap(data => { console.log(data); }))
        .subscribe(viewchildrend => { this.viewchildrend = viewchildrend; });
    });
  }

}
