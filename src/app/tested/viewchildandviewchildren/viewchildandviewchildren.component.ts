import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';
import { CustomersService } from 'src/app/customers/customers.service';
import { Customers } from 'src/app/customers/model/customers';
import { Link } from '../subcribing/link';
import { LINKSVIEWCHILDANDVIEWCHILDREN } from '../subcribing/links';
@Component({
  selector: 'app-viewchildandviewchildren',
  templateUrl: './viewchildandviewchildren.component.html',
  styleUrls: ['./viewchildandviewchildren.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class ViewchildandviewchildrenComponent implements OnInit {
  customers: Customers;
  baseUrl: string;
  links: Link[];
  errorMessage: string;
  constructor(
    private customersService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.links = LINKSVIEWCHILDANDVIEWCHILDREN;
    this.customersService
      .getCustomer(7)
      .pipe(tap(data => { console.log(data); }))
      .subscribe(customer => {
        this.customers = customer;
        this.baseUrl = 'http://localhost:3000/';
      }, errorMessage => { this.errorMessage = errorMessage; });
  }

}
