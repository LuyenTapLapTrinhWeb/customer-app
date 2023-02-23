import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from '../person.abstract';
import { IEmployee } from './employee.model';
import { EmployeeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeee: Person;

  constructor() { }

  ngOnInit(): void {
    this.employeee = new EmployeeeService('[generic CRUD service] [Abstract Class extend] [Interface Implement]', 100);
  }

}
