# CRM Angular Frontend

## Proje Yapısı

Bu proje kurumsal standartlara uygun şekilde yapılandırılmıştır.

### Klasör Yapısı

```
src/
├── app/
│   ├── core/                 # Singleton servisler, guards, interceptors
│   │   ├── guards/          # Route guards
│   │   ├── interceptors/    # HTTP interceptors
│   │   ├── models/          # Core models
│   │   └── services/        # Singleton servisler
│   │
│   ├── shared/              # Paylaşılan modüller
│   │   ├── components/      # Paylaşılan componentler
│   │   ├── directives/      # Custom directiveler
│   │   ├── pipes/           # Custom pipe'lar
│   │   ├── models/          # Paylaşılan modeller
│   │   └── validators/      # Form validatorleri
│   │
│   ├── features/            # Feature modülleri
│   │   └── [feature-name]/  # Her feature kendi klasöründe
│   │       ├── components/
│   │       ├── services/
│   │       ├── models/
│   │       └── [feature].routes.ts
│   │
│   ├── layouts/             # Layout componentleri
│   │   ├── header/
│   │   ├── footer/
│   │   └── sidebar/
│   │
│   ├── models/              # Global model tanımları
│   ├── enums/               # Global enum tanımları
│   ├── constants/           # Global sabitler
│   └── utils/               # Yardımcı fonksiyonlar
│
├── assets/                  # Statik dosyalar
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── environments/            # Environment konfigürasyonları
    ├── environment.ts
    └── environment.development.ts
```

### Klasör Açıklamaları

- **core/**: Uygulama genelinde tek instance olarak kullanılacak servisler, guards ve interceptorlar
- **shared/**: Birden fazla modülde kullanılacak paylaşılan componentler, directiveler ve pipe'lar
- **features/**: Her iş mantığı için ayrı feature modülleri (lazy loading destekli)
- **layouts/**: Ana layout componentleri (header, footer, sidebar vb.)
- **models/**: TypeScript interface ve type tanımları
- **constants/**: Sabit değerler
- **enums/**: Enum tanımları
- **utils/**: Yardımcı fonksiyonlar

### Geliştirme

```bash
npm start
```

### Build

```bash
npm run build
```
