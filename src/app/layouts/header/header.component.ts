import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/auth.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userMenuOpen = false;
  notificationsOpen = false;
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
    this.notificationsOpen = false;
  }

  toggleNotifications() {
    this.notificationsOpen = !this.notificationsOpen;
    this.userMenuOpen = false;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getInitials(): string {
    if (!this.currentUser) return 'U';
    const names = this.currentUser.fullName.split(' ');
    if (names.length >= 2) {
      return names[0].charAt(0) + names[names.length - 1].charAt(0);
    }
    return this.currentUser.fullName.charAt(0);
  }

  getUserRole(): string {
    if (!this.currentUser) return '';
    const roleMap: { [key: string]: string } = {
      'admin': 'Yönetici',
      'user': 'Kullanıcı',
      'manager': 'Müdür'
    };
    return roleMap[this.currentUser.userType] || this.currentUser.userType;
  }
}
