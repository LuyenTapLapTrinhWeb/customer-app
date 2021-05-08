import { Component, Input, OnInit } from '@angular/core';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';
import { CustomersService } from 'src/app/customers/customers.service';

@Component({
  selector: 'app-bindingandstructuredirectives',
  templateUrl: './bindingandstructuredirectives.component.html',
  styleUrls: ['./bindingandstructuredirectives.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class BindingandstructuredirectivesComponent implements OnInit {
  avatar: string;

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getCustomer(4).subscribe(customer => {
      this.avatar = 'http://localhost:3000/' + customer.avatar.avatar;
    });
  }
}
