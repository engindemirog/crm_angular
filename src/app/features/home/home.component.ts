import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stats = [
    {
      title: 'Toplam Müşteri',
      value: '2,543',
      change: '+12.5%',
      trend: 'up',
      icon: 'users'
    },
    {
      title: 'Aktif Projeler',
      value: '142',
      change: '+8.2%',
      trend: 'up',
      icon: 'projects'
    },
    {
      title: 'Bekleyen Görevler',
      value: '38',
      change: '-3.1%',
      trend: 'down',
      icon: 'tasks'
    },
    {
      title: 'Aylık Gelir',
      value: '₺524,890',
      change: '+15.3%',
      trend: 'up',
      icon: 'revenue'
    }
  ];
}
