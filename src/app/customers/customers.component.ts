import { Component, Inject, OnInit } from '@angular/core';
import { flyInOut, toggleTrigger } from '../animations/reuse/app.animation';
import { CustomersService } from './customers.service';
import { Customers } from './model/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block'
  },
  animations: [
    toggleTrigger(),
    flyInOut()
  ]
})
export class CustomersComponent implements OnInit {
  customers: Customers[];
  toggleTriggerState = 'fadeIn';
  constructor(private customersService: CustomersService, @Inject('BaseUrl') private BaseUrl) { }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(customers => { this.customers = customers; });
  }

}
