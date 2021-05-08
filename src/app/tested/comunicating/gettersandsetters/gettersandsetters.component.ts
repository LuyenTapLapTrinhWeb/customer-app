import { Component, OnInit } from '@angular/core';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';
import { CustomersService } from 'src/app/customers/customers.service';
import { Avatar } from 'src/app/customers/model/avatar';
import { Customers } from 'src/app/customers/model/customers';

@Component({
  selector: 'app-gettersandsetters',
  templateUrl: './gettersandsetters.component.html',
  styleUrls: ['./gettersandsetters.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class GettersandsettersComponent implements OnInit {
  customer: Customers;
  baseUrl: string;
  images: string | string[];
  // tslint:disable-next-line:variable-name
  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
  }
  constructor(private customersService: CustomersService) { this.baseUrl = 'http://localhost:3000/'; }

  ngOnInit(): void {
    this.customersService.getCustomer(6).subscribe(customer => {
      this.customer = customer;
      console.log(customer);
      this.images = this.baseUrl + customer.avatar.avatar;
    });
  }
}
