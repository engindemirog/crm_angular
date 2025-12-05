import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest } from '../../../core/models/auth.model';

interface Toast {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: LoginRequest = {
    username: '',
    password: ''
  };

  submitting = false;
  formErrors: { [key: string]: string } = {};
  toast: Toast = { message: '', type: 'success', visible: false };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  validateForm(): boolean {
    this.formErrors = {};

    if (!this.credentials.username.trim()) {
      this.formErrors['username'] = 'Kullanıcı adı zorunludur';
    }

    if (!this.credentials.password) {
      this.formErrors['password'] = 'Şifre zorunludur';
    }

    return Object.keys(this.formErrors).length === 0;
  }

  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    this.submitting = true;

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.showToast('Giriş başarılı! Yönlendiriliyorsunuz...', 'success');
        setTimeout(() => {
          this.router.navigate(['/customers']);
        }, 1000);
      },
      error: (error) => {
        console.error('Login error:', error);
        this.submitting = false;

        let errorMessage = 'Giriş başarısız oldu';

        if (error.status === 401 || error.status === 403) {
          errorMessage = 'Kullanıcı adı veya şifre hatalı';
        } else if (error.error && typeof error.error === 'string') {
          errorMessage = error.error;
        } else if (error.error?.detail) {
          errorMessage = error.error.detail;
        }

        this.showToast(errorMessage, 'error');
      }
    });
  }

  showToast(message: string, type: 'success' | 'error'): void {
    this.toast = { message, type, visible: true };
    setTimeout(() => {
      this.toast.visible = false;
    }, 4000);
  }
}
