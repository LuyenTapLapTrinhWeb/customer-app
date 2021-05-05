import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Customers } from './model/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>('http://localhost:3000/' + 'customers');
  }
  getCustomer(id: number): Observable<Customers> {
    return this.http.get<Customers>('http://localhost:3000/' + 'customers/' + id);
  }
  getCustomersIDs(): Observable<string[] | any> {
    return this.getCustomers()
      .pipe(map((customers) => customers.map(customer => customer.id)))
      .pipe(catchError(error => error));
  }
}
