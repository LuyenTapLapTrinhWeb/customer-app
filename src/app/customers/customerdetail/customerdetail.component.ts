import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomersService } from '../customers.service';
import { Avatar } from '../model/avatar';
import { Customers } from '../model/customers';
import { switchMap } from 'rxjs/operators';
import { flyInOut, toggleTrigger, visibility } from 'src/app/animations/reuse/app.animation';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
  },
  animations: [
    visibility(),
    flyInOut(),
    toggleTrigger()
  ]
})
export class CustomerdetailComponent implements OnInit {
  customer: Customers;
  avatars: Avatar;
  visibilityState = 'hidden';
  errorMessage: string;
  index: number;
  dishIds: string[];
  prev: string;
  next: string;
  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute,
    @Inject('BaseUrl') private BaseUrl
  ) { }

  ngOnInit(): void {
    this.getCustomersIDs();
    this.toggleState();
  }
  getCustomersIDs(): void {
    this.customersService.getCustomersIDs().subscribe(
      dishIds => {
        this.dishIds = dishIds;
      },
      errorMessage => { this.errorMessage = (errorMessage as any); });
  }
  toggleState(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        this.visibilityState = 'hidden';
        return this.customersService.getCustomer(+params.id);
      }))
      .subscribe(customer => {
        this.customer = customer;
        this.visibilityState = 'shown';
        this.setNextPrev(customer.id);
      },
        errorMessage => { this.errorMessage = errorMessage; }
      );
  }
  setNextPrev(dishId: string): void {
    const index = this.index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
}
