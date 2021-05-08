import { Component, Input, OnInit } from '@angular/core';
import { transitionPage } from 'src/app/animations/reuse/transitionPage.animation';
import { transitionY } from 'src/app/animations/reuse/transitionTable.animation';
import { CustomersService } from 'src/app/customers/customers.service';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss'],
  animations: [transitionY(), transitionPage()]
})
export class TwowaybindingComponent implements OnInit {
  avatar2: string;
  idofimage: number;
  errorMessage: string;
  constructor(
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
    this.getImage(null);
  }
  getImage(idofimage: number): void {
    if (!idofimage) {
      idofimage = 5;
      this.idofimage = 5;
    }
    this.customersService.getCustomer(idofimage).subscribe(
      customer => {
        this.avatar2 = 'http://localhost:3000/' + customer.avatar.avatar;
      },
      errorMessage => { this.errorMessage = errorMessage.message; }
    );
  }
  onChangeIDOfImage(idofimage: number): void {
    this.idofimage = null;
    this.avatar2 = null;
    this.errorMessage = null;
    this.idofimage = idofimage;
    this.getImage(this.idofimage);
  }
}
