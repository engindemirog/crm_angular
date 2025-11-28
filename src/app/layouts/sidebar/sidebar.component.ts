import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      active: true
    },
    {
      icon: 'customers',
      label: 'Müşteriler',
      route: '/customers',
      active: false
    },
    {
      icon: 'projects',
      label: 'Projeler',
      route: '/projects',
      active: false
    },
    {
      icon: 'tasks',
      label: 'Görevler',
      route: '/tasks',
      active: false
    },
    {
      icon: 'calendar',
      label: 'Takvim',
      route: '/calendar',
      active: false
    },
    {
      icon: 'reports',
      label: 'Raporlar',
      route: '/reports',
      active: false
    },
    {
      icon: 'settings',
      label: 'Ayarlar',
      route: '/settings',
      active: false
    }
  ];

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  setActive(item: any) {
    this.menuItems.forEach(i => i.active = false);
    item.active = true;
  }
}
