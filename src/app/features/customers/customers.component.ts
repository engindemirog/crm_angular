import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../core/services/customer.service';
import { IndividualCustomer, CreateCustomerRequest, AccountManagerDropdown } from '../../core/models/customer.model';
import { finalize } from 'rxjs/operators';

interface Toast {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
}

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: IndividualCustomer[] = [];
  total = 0;
  loading = true;
  error = '';

  // Modal state
  showAddModal = false;
  submitting = false;

  // Account Managers
  accountManagers: AccountManagerDropdown[] = [];
  selectedAccountManagerId: number | null = null;

  // Toast state
  toast: Toast = { message: '', type: 'success', visible: false };

  // Form data
  newCustomer: CreateCustomerRequest = {
    firstName: '',
    lastName: '',
    email: '',
    natId: '',
    fatherName: '',
    birthDate: '',
    password: ''
  };

  // Form errors
  formErrors: { [key: string]: string } = {};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.loading = true;
    this.error = '';
    console.log('Loading customers...');

    this.customerService.getIndividualCustomers().subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        this.customers = response.customers;
        this.total = response.total;
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Müşteriler yüklenirken bir hata oluştu.';
        this.loading = false;
        console.error('Error loading customers:', error);
      }
    });
  }

  openAddModal(): void {
    this.showAddModal = true;
    this.resetForm();
    this.loadAccountManagers();
  }

  loadAccountManagers(): void {
    this.customerService.getAccountManagersDropdown().subscribe({
      next: (managers) => {
        this.accountManagers = managers;
      },
      error: (error) => {
        console.error('Error loading account managers:', error);
      }
    });
  }

  closeAddModal(): void {
    this.showAddModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.newCustomer = {
      firstName: '',
      lastName: '',
      email: '',
      natId: '',
      fatherName: '',
      birthDate: '',
      password: ''
    };
    this.formErrors = {};
    this.selectedAccountManagerId = null;
  }

  validateForm(): boolean {
    this.formErrors = {};

    if (!this.newCustomer.firstName.trim()) {
      this.formErrors['firstName'] = 'Ad alanı zorunludur';
    }

    if (!this.newCustomer.lastName.trim()) {
      this.formErrors['lastName'] = 'Soyad alanı zorunludur';
    }

    if (!this.newCustomer.email.trim()) {
      this.formErrors['email'] = 'E-posta alanı zorunludur';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.newCustomer.email)) {
      this.formErrors['email'] = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!this.newCustomer.natId.trim()) {
      this.formErrors['natId'] = 'TC Kimlik No alanı zorunludur';
    } else if (!/^\d{11}$/.test(this.newCustomer.natId)) {
      this.formErrors['natId'] = 'TC Kimlik No 11 haneli olmalıdır';
    }

    if (!this.newCustomer.fatherName.trim()) {
      this.formErrors['fatherName'] = 'Baba adı alanı zorunludur';
    }

    if (!this.newCustomer.birthDate) {
      this.formErrors['birthDate'] = 'Doğum tarihi alanı zorunludur';
    }

    if (!this.newCustomer.password) {
      this.formErrors['password'] = 'Şifre alanı zorunludur';
    } else if (this.newCustomer.password.length < 6) {
      this.formErrors['password'] = 'Şifre en az 6 karakter olmalıdır';
    }

    return Object.keys(this.formErrors).length === 0;
  }

  submitCustomer(): void {
    if (!this.validateForm()) {
      return;
    }

    this.submitting = true;

    // Format birthDate to ISO string
    const customerData: CreateCustomerRequest = {
      ...this.newCustomer,
      birthDate: new Date(this.newCustomer.birthDate).toISOString(),
      ...(this.selectedAccountManagerId && { accountManagerId: this.selectedAccountManagerId })
    };

    this.customerService.createIndividualCustomer(customerData)
      .pipe(
        finalize(() => {
          this.submitting = false;
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Customer created:', response);
          this.showAddModal = false;
          this.resetForm();
          this.showToast('Müşteri başarıyla eklendi!', 'success');
          this.loadCustomers();
        },
        error: (error) => {
          console.error('Error creating customer:', error);

          if (error.error?.detail) {
            // Handle validation errors from API
            if (Array.isArray(error.error.detail)) {
              const messages = error.error.detail.map((e: any) => e.msg).join(', ');
              this.showToast(messages || 'Doğrulama hatası oluştu', 'error');
            } else {
              this.showToast(error.error.detail, 'error');
            }
          } else {
            this.showToast('Müşteri eklenirken bir hata oluştu', 'error');
          }
        }
      });
  }

  showToast(message: string, type: 'success' | 'error'): void {
    this.toast = { message, type, visible: true };
    setTimeout(() => {
      this.toast.visible = false;
    }, 4000);
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
