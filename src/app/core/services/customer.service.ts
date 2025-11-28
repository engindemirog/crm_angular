import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CustomerListResponse, IndividualCustomer, CreateCustomerRequest, AccountManagerDropdown } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = `${environment.apiUrl}/customers`;

  constructor(private http: HttpClient) {}

  getIndividualCustomers(): Observable<CustomerListResponse> {
    return this.http.get<CustomerListResponse>(`${this.apiUrl}/individual/`);
  }

  createIndividualCustomer(customer: CreateCustomerRequest): Observable<IndividualCustomer | null> {
    return this.http.post<IndividualCustomer>(`${this.apiUrl}/individual/`, customer, {
      observe: 'response'
    }).pipe(
      map(response => {
        console.log('HTTP Status:', response.status);
        console.log('Response body:', response.body);
        return response.body;
      })
    );
  }

  getAccountManagersDropdown(): Observable<AccountManagerDropdown[]> {
    return this.http.get<AccountManagerDropdown[]>(`${environment.apiUrl}/account-managers/dropdown`);
  }
}
