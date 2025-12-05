# CRM Angular Projesi - Kullanılan Promptlar

## 1. Loading Problemi
```
customers sayfasını ilk kez açtığımda loading sürekli dönüyor. Örneğin müşteri ekleme butonuna basınca arka planda müşteriler listeleniyor. state problemi var gibi.
```

## 2. Modal Yerine Ayrı Sayfa
```
müşteri ekleme işlemini başka sayfaya taşıyalım. modal olmasın
```

## 3. Loading Sorunu Devam
```
şimdi customers sayfasını baştan sona kontrol et. loader sürekli dönüyor. api response hatasız geliyor. customers
: 
Array(3)
0
: 
{firstName: 'Ahmet', lastName: 'Yılmaz', email: 'ahmet.yilmaz@example.com', natId: '12345678901', fatherName: 'Mehmet', …}
1
: 
{firstName: 'Ayşe', lastName: 'Demir', email: 'ayse.demir@example.com', natId: '98765432109', fatherName: 'Ali', …}
2
: 
{firstName: 'Mehmet', lastName: 'Kaya', email: 'mehmet.kaya@example.com', natId: '11122233344', fatherName: 'Hasan', …}
length
: 
3
[[Prototype]]
: 
Array(0)
total
: 
3 
```

## 4. Konsol Log Kontrol
```
Angular is running in development mode.
customers.component.ts:32 Loading customers...
customers.component.ts:37 API Response: {total: 3, customers: Array(3)}
customers.component.ts:50 Customers loaded: 3 loading: false bu kadar
```

## 5. Login Sistemi Ekleme
```
Sisteme kullanıcı girişi sayfası ekle. Diğer tüm sayfalar giriş yapıldıktan sonra açılabilir. Login işlemi için endpoint : http://localhost:8000/api/v1/auth/login
Request body : {
  "password": "admin123",
  "username": "admin"
}
200 Successful Response Body : {
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 1800,
  "token_type": "bearer",
  "user": {
    "email": "admin@crm.com",
    "fullName": "System Admin",
    "id": 1,
    "userType": "admin",
    "username": "admin"
  }
}
401 ve 403 için : "string"
```

## 6. Prompts Kaydetme
```
şu ana kadar yazdığım tüm promptları prompts.md dosyasına ekle
```
