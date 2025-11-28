import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = {
    product: [
      { label: 'Özellikler', href: '#' },
      { label: 'Fiyatlandırma', href: '#' },
      { label: 'Güvenlik', href: '#' }
    ],
    company: [
      { label: 'Hakkımızda', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'İletişim', href: '#' }
    ],
    resources: [
      { label: 'Dokümantasyon', href: '#' },
      { label: 'Destek', href: '#' },
      { label: 'API', href: '#' }
    ]
  };
}
