import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomerService } from '../../core/services/customer.service';
import { IndividualCustomer } from '../../core/models/customer.model';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: IndividualCustomer[] = [];
  total = 0;
  loading = true;
  error = '';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.loading = true;
    this.error = '';
    console.log('Loading customers...');

    this.customerService.getIndividualCustomers()
      .subscribe({
        next: (response: any) => {
          console.log('API Response:', response);
          // Handle both array and object response formats
          if (Array.isArray(response)) {
            this.customers = response;
            this.total = response.length;
          } else if (response && response.customers) {
            this.customers = response.customers;
            this.total = response.total || response.customers.length;
          } else {
            this.customers = [];
            this.total = 0;
          }
          this.loading = false;
          this.cdr.detectChanges();
          console.log('Customers loaded:', this.customers.length, 'loading:', this.loading);
        },
        error: (error: any) => {
          this.error = 'Müşteriler yüklenirken bir hata oluştu.';
          this.loading = false;
          this.cdr.detectChanges();
          console.error('Error loading customers:', error);
        }
      });
  }

  goToAddCustomer(): void {
    this.router.navigate(['/customers/add']);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
