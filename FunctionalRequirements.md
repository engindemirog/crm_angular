# CRM Uygulaması - Fonksiyonel Gereksinimler

## 1. Müşteri Yönetimi Modülü

### 1.1 Müşteri Listeleme

#### FR-CUS-001: Müşteri Listesi Görüntüleme
- **Açıklama:** Sistem, kayıtlı tüm bireysel müşterileri tablo formatında listelemelidir.
- **Kabul Kriterleri:**
  - Müşteri listesi sayfa yüklendiğinde otomatik olarak yüklenmelidir
  - Liste aşağıdaki sütunları içermelidir: ID, Ad Soyad, E-posta, TC Kimlik No, Baba Adı, Doğum Tarihi, Kayıt Tarihi

#### FR-CUS-002: Müşteri Sayısı Gösterimi
- **Açıklama:** Sistem, toplam müşteri sayısını sayfa başlığında göstermelidir.
- **Kabul Kriterleri:**
  - Toplam müşteri sayısı "Toplam: X Müşteri" formatında görüntülenmelidir
  - Sayı, yeni müşteri eklendiğinde güncellenmelidir

#### FR-CUS-003: Yükleme Durumu Gösterimi
- **Açıklama:** Müşteri listesi yüklenirken kullanıcıya yükleme durumu gösterilmelidir.
- **Kabul Kriterleri:**
  - Veriler yüklenirken spinner/loading göstergesi görünmelidir
  - "Müşteriler yükleniyor..." mesajı gösterilmelidir

#### FR-CUS-004: Hata Durumu Gösterimi
- **Açıklama:** Müşteri listesi yüklenirken hata oluşursa kullanıcıya bilgi verilmelidir.
- **Kabul Kriterleri:**
  - Hata durumunda hata mesajı görüntülenmelidir
  - "Tekrar Dene" butonu ile yeniden yükleme yapılabilmelidir

#### FR-CUS-005: Boş Liste Durumu
- **Açıklama:** Sistemde kayıtlı müşteri yoksa kullanıcıya bilgi verilmelidir.
- **Kabul Kriterleri:**
  - "Henüz müşteri yok" mesajı görüntülenmelidir
  - "Sistemde kayıtlı müşteri bulunmamaktadır" açıklaması gösterilmelidir

---

### 1.2 Müşteri Ekleme

#### FR-CUS-006: Yeni Müşteri Ekleme Modal Açma
- **Açıklama:** Kullanıcı yeni müşteri eklemek için modal pencere açabilmelidir.
- **Kabul Kriterleri:**
  - "Yeni Müşteri Ekle" butonu sayfa başlığında görünür olmalıdır
  - Butona tıklandığında müşteri ekleme modalı açılmalıdır

#### FR-CUS-007: Müşteri Ekleme Formu
- **Açıklama:** Müşteri ekleme modalı gerekli tüm alanları içermelidir.
- **Kabul Kriterleri:**
  - Form aşağıdaki alanları içermelidir:
    - Ad (zorunlu, text input)
    - Soyad (zorunlu, text input)
    - E-posta (zorunlu, email input)
    - TC Kimlik No (zorunlu, text input, 11 karakter)
    - Baba Adı (zorunlu, text input)
    - Doğum Tarihi (zorunlu, date input)
    - Şifre (zorunlu, password input, minimum 6 karakter)
    - Account Manager (opsiyonel, dropdown)
  - Zorunlu alanlar yıldız (*) işareti ile belirtilmelidir

#### FR-CUS-008: Form Validasyonu
- **Açıklama:** Müşteri ekleme formu client-side validasyon yapmalıdır.
- **Kabul Kriterleri:**
  - Ad alanı boş bırakılamaz - "Ad alanı zorunludur" hatası gösterilmelidir
  - Soyad alanı boş bırakılamaz - "Soyad alanı zorunludur" hatası gösterilmelidir
  - E-posta alanı boş bırakılamaz - "E-posta alanı zorunludur" hatası gösterilmelidir
  - E-posta formatı geçersizse - "Geçerli bir e-posta adresi giriniz" hatası gösterilmelidir
  - TC Kimlik No boş bırakılamaz - "TC Kimlik No alanı zorunludur" hatası gösterilmelidir
  - TC Kimlik No 11 haneli olmalıdır - "TC Kimlik No 11 haneli olmalıdır" hatası gösterilmelidir
  - Baba Adı boş bırakılamaz - "Baba adı alanı zorunludur" hatası gösterilmelidir
  - Doğum Tarihi boş bırakılamaz - "Doğum tarihi alanı zorunludur" hatası gösterilmelidir
  - Şifre boş bırakılamaz - "Şifre alanı zorunludur" hatası gösterilmelidir
  - Şifre 6 karakterden az olamaz - "Şifre en az 6 karakter olmalıdır" hatası gösterilmelidir
  - Hata mesajları ilgili input alanının altında kırmızı renkte gösterilmelidir
  - Hatalı alanların border rengi kırmızı olmalıdır

#### FR-CUS-009: Account Manager Seçimi
- **Açıklama:** Kullanıcı müşteriye bir account manager atayabilmelidir.
- **Kabul Kriterleri:**
  - Account Manager dropdown'ı sistemdeki tüm account manager'ları listelemelidir
  - Dropdown varsayılan olarak "-- Account Manager Seçin --" seçeneği göstermelidir
  - Account Manager seçimi opsiyoneldir

#### FR-CUS-010: Müşteri Kaydetme
- **Açıklama:** Validasyonu geçen form submit edildiğinde müşteri kaydedilmelidir.
- **Kabul Kriterleri:**
  - "Müşteri Ekle" butonuna tıklandığında form submit edilmelidir
  - Submit sırasında buton "Ekleniyor..." durumuna geçmelidir
  - Submit sırasında buton disable olmalıdır
  - Başarılı kayıt sonrası modal kapanmalıdır
  - Başarılı kayıt sonrası müşteri listesi yenilenmelidir

#### FR-CUS-011: Başarılı İşlem Bildirimi
- **Açıklama:** Müşteri başarıyla eklendiğinde kullanıcıya bildirim gösterilmelidir.
- **Kabul Kriterleri:**
  - Yeşil renkli toast notification gösterilmelidir
  - "Müşteri başarıyla eklendi!" mesajı gösterilmelidir
  - Toast 4 saniye sonra otomatik kapanmalıdır

#### FR-CUS-012: Hatalı İşlem Bildirimi
- **Açıklama:** Müşteri eklenirken hata oluşursa kullanıcıya bildirim gösterilmelidir.
- **Kabul Kriterleri:**
  - Kırmızı renkli toast notification gösterilmelidir
  - API'den gelen hata mesajı gösterilmelidir
  - Genel hata durumunda "Müşteri eklenirken bir hata oluştu" mesajı gösterilmelidir

#### FR-CUS-013: Modal Kapatma
- **Açıklama:** Kullanıcı müşteri ekleme modalını kapatabilmelidir.
- **Kabul Kriterleri:**
  - Modal sağ üst köşesindeki X butonuna tıklayarak kapatılabilmelidir
  - "İptal" butonuna tıklayarak kapatılabilmelidir
  - Modal dışına (overlay) tıklayarak kapatılabilmelidir
  - Modal kapatıldığında form sıfırlanmalıdır

---

## 2. UI Gereksinimleri (Selenium Test Kriterleri)

### 2.1 Müşteri Listesi Sayfası UI Gereksinimleri

#### UI-CUS-001: Sayfa Başlığı
- **Element:** Sayfa başlığı
- **Beklenen:** "Müşteriler" metni görünür olmalıdır
- **Lokasyon:** `.page-title` veya `h1` elementi

#### UI-CUS-002: Sayfa Alt Başlığı
- **Element:** Sayfa açıklaması
- **Beklenen:** "Tüm bireysel müşterilerinizi görüntüleyin ve yönetin" metni görünür olmalıdır
- **Lokasyon:** `.page-subtitle` elementi

#### UI-CUS-003: Yeni Müşteri Ekle Butonu
- **Element:** Müşteri ekleme butonu
- **Beklenen:** "Yeni Müşteri Ekle" metni ve + ikonu görünür olmalıdır
- **Lokasyon:** `.add-button` elementi
- **Aksiyon:** Tıklanabilir olmalıdır

#### UI-CUS-004: Toplam Müşteri Badge
- **Element:** Müşteri sayısı göstergesi
- **Beklenen:** "Toplam: X Müşteri" formatında görünür olmalıdır
- **Lokasyon:** `.stat-badge` elementi

#### UI-CUS-005: Müşteri Tablosu Başlıkları
- **Element:** Tablo header satırı
- **Beklenen Sütunlar:** ID, Ad Soyad, E-posta, TC Kimlik No, Baba Adı, Doğum Tarihi, Kayıt Tarihi
- **Lokasyon:** `.customers-table thead th` elementleri

#### UI-CUS-006: Müşteri Satırları
- **Element:** Tablo body satırları
- **Beklenen:** Her müşteri için bir satır olmalıdır
- **Lokasyon:** `.customers-table tbody tr` veya `.table-row` elementleri

#### UI-CUS-007: Müşteri Avatar
- **Element:** Müşteri baş harfleri göstergesi
- **Beklenen:** Müşterinin ad ve soyadının baş harfleri görünür olmalıdır
- **Lokasyon:** `.avatar` elementi

#### UI-CUS-008: Loading Spinner
- **Element:** Yükleme göstergesi
- **Beklenen:** Veriler yüklenirken spinner görünür olmalıdır
- **Lokasyon:** `.spinner` elementi
- **Koşul:** `loading = true` durumunda görünür

#### UI-CUS-009: Boş Durum Mesajı
- **Element:** Boş liste bildirimi
- **Beklenen:** "Henüz müşteri yok" mesajı görünür olmalıdır
- **Lokasyon:** `.empty-state` elementi
- **Koşul:** `customers.length === 0` durumunda görünür

---

### 2.2 Müşteri Ekleme Modal UI Gereksinimleri

#### UI-CUS-010: Modal Overlay
- **Element:** Modal arka plan
- **Beklenen:** Yarı saydam siyah overlay görünür olmalıdır
- **Lokasyon:** `.modal-overlay` elementi
- **Koşul:** `showAddModal = true` durumunda görünür

#### UI-CUS-011: Modal Başlık
- **Element:** Modal header
- **Beklenen:** "Yeni Müşteri Ekle" metni görünür olmalıdır
- **Lokasyon:** `.modal-header h2` elementi

#### UI-CUS-012: Modal Kapatma Butonu
- **Element:** X butonu
- **Beklenen:** X ikonu görünür ve tıklanabilir olmalıdır
- **Lokasyon:** `.modal-close` elementi

#### UI-CUS-013: Ad Input Alanı
- **Element:** Ad input
- **Beklenen:** 
  - Label: "Ad *"
  - Placeholder: "Müşteri adı"
- **Lokasyon:** `#firstName` elementi
- **Attribute:** `name="firstName"`

#### UI-CUS-014: Soyad Input Alanı
- **Element:** Soyad input
- **Beklenen:**
  - Label: "Soyad *"
  - Placeholder: "Müşteri soyadı"
- **Lokasyon:** `#lastName` elementi
- **Attribute:** `name="lastName"`

#### UI-CUS-015: E-posta Input Alanı
- **Element:** E-posta input
- **Beklenen:**
  - Label: "E-posta *"
  - Placeholder: "ornek@email.com"
  - Type: email
- **Lokasyon:** `#email` elementi
- **Attribute:** `name="email"`

#### UI-CUS-016: TC Kimlik No Input Alanı
- **Element:** TC Kimlik input
- **Beklenen:**
  - Label: "TC Kimlik No *"
  - Placeholder: "11 haneli TC Kimlik No"
  - Maxlength: 11
- **Lokasyon:** `#natId` elementi
- **Attribute:** `name="natId"`

#### UI-CUS-017: Baba Adı Input Alanı
- **Element:** Baba adı input
- **Beklenen:**
  - Label: "Baba Adı *"
  - Placeholder: "Baba adı"
- **Lokasyon:** `#fatherName` elementi
- **Attribute:** `name="fatherName"`

#### UI-CUS-018: Doğum Tarihi Input Alanı
- **Element:** Doğum tarihi input
- **Beklenen:**
  - Label: "Doğum Tarihi *"
  - Type: date
- **Lokasyon:** `#birthDate` elementi
- **Attribute:** `name="birthDate"`

#### UI-CUS-019: Şifre Input Alanı
- **Element:** Şifre input
- **Beklenen:**
  - Label: "Şifre *"
  - Placeholder: "En az 6 karakter"
  - Type: password
- **Lokasyon:** `#password` elementi
- **Attribute:** `name="password"`

#### UI-CUS-020: Account Manager Dropdown
- **Element:** Account Manager select
- **Beklenen:**
  - Label: "Account Manager"
  - Varsayılan seçenek: "-- Account Manager Seçin --"
- **Lokasyon:** `#accountManager` elementi
- **Attribute:** `name="accountManager"`

#### UI-CUS-021: İptal Butonu
- **Element:** İptal butonu
- **Beklenen:** "İptal" metni görünür olmalıdır
- **Lokasyon:** `.btn-cancel` elementi
- **Aksiyon:** Tıklandığında modal kapanmalıdır

#### UI-CUS-022: Müşteri Ekle Butonu
- **Element:** Submit butonu
- **Beklenen:** "Müşteri Ekle" metni görünür olmalıdır
- **Lokasyon:** `.btn-submit` elementi
- **Aksiyon:** Tıklandığında form submit edilmelidir

#### UI-CUS-023: Submit Butonu Loading Durumu
- **Element:** Submit butonu loading state
- **Beklenen:** 
  - Spinner görünür olmalıdır
  - "Ekleniyor..." metni görünür olmalıdır
  - Buton disabled olmalıdır
- **Lokasyon:** `.btn-submit .btn-loading` elementi
- **Koşul:** `submitting = true` durumunda görünür

#### UI-CUS-024: Validasyon Hata Mesajları
- **Element:** Error text
- **Beklenen:** Hata mesajları kırmızı renkte input altında görünür olmalıdır
- **Lokasyon:** `.error-text` elementleri
- **Koşul:** Validasyon hatası olduğunda görünür

#### UI-CUS-025: Hatalı Input Görünümü
- **Element:** Error state input
- **Beklenen:** Hatalı inputların border rengi kırmızı olmalıdır
- **Lokasyon:** `input.error` elementleri
- **Koşul:** Validasyon hatası olduğunda uygulanır

---

### 2.3 Toast Notification UI Gereksinimleri

#### UI-CUS-026: Başarı Toast
- **Element:** Success toast
- **Beklenen:**
  - Yeşil arka plan rengi
  - Başarı ikonu (checkmark)
  - Mesaj metni
- **Lokasyon:** `.toast.toast-success` elementi
- **Koşul:** `toast.visible = true && toast.type = 'success'` durumunda görünür

#### UI-CUS-027: Hata Toast
- **Element:** Error toast
- **Beklenen:**
  - Kırmızı arka plan rengi
  - Hata ikonu (X)
  - Mesaj metni
- **Lokasyon:** `.toast.toast-error` elementi
- **Koşul:** `toast.visible = true && toast.type = 'error'` durumunda görünür

#### UI-CUS-028: Toast Pozisyonu
- **Element:** Toast notification
- **Beklenen:** Sayfanın sağ üst köşesinde konumlanmalıdır
- **Lokasyon:** `.toast` elementi

---

### 1.3 Müşteri Ekleme Sayfası (Ayrı Sayfa)

#### FR-CUS-014: Müşteri Ekleme Sayfasına Yönlendirme
- **Açıklama:** "Yeni Müşteri Ekle" butonuna tıklandığında ayrı bir sayfaya yönlendirilmelidir.
- **Kabul Kriterleri:**
  - Butona tıklandığında `/customers/add` route'una yönlendirilmelidir
  - Sayfa geçişi smooth olmalıdır

#### FR-CUS-015: Müşteri Ekleme Sayfası Başlığı
- **Açıklama:** Müşteri ekleme sayfası başlık ve açıklama içermelidir.
- **Kabul Kriterleri:**
  - Sayfa başlığı "Yeni Müşteri Ekle" olmalıdır
  - Sayfa açıklaması "Yeni bir bireysel müşteri kaydı oluşturun" olmalıdır
  - "Geri Dön" butonu görünür olmalıdır

#### FR-CUS-016: Geri Dön Butonu
- **Açıklama:** Kullanıcı müşteri listesine geri dönebilmelidir.
- **Kabul Kriterleri:**
  - "Geri Dön" butonu sayfa başında görünür olmalıdır
  - Butona tıklandığında `/customers` sayfasına yönlendirilmelidir
  - "İptal" butonu da aynı işlevi görmelidir

#### FR-CUS-017: Form Bölümleri
- **Açıklama:** Form mantıksal bölümlere ayrılmalıdır.
- **Kabul Kriterleri:**
  - "Kişisel Bilgiler" bölümü: Ad, Soyad, TC Kimlik No, Baba Adı, Doğum Tarihi, Account Manager
  - "İletişim ve Güvenlik" bölümü: E-posta, Şifre

#### FR-CUS-018: Formu Temizle Butonu
- **Açıklama:** Kullanıcı formu temizleyebilmelidir.
- **Kabul Kriterleri:**
  - "Formu Temizle" butonu görünür olmalıdır
  - Butona tıklandığında tüm form alanları sıfırlanmalıdır
  - Validasyon hataları temizlenmelidir

#### FR-CUS-019: Başarılı Kayıt Sonrası Yönlendirme
- **Açıklama:** Müşteri başarıyla eklendiğinde müşteri listesine yönlendirilmelidir.
- **Kabul Kriterleri:**
  - Başarılı kayıt sonrası "Müşteri başarıyla eklendi!" toast gösterilmelidir
  - 1.5 saniye sonra `/customers` sayfasına otomatik yönlendirilmelidir

---

## 2. Kimlik Doğrulama Modülü

### 2.1 Kullanıcı Girişi (Login)

#### FR-AUTH-001: Login Sayfası Görüntüleme
- **Açıklama:** Giriş yapmamış kullanıcılar login sayfasını görmelidir.
- **Kabul Kriterleri:**
  - Uygulama ilk açıldığında `/login` sayfası görünmelidir
  - Token yoksa tüm korumalı route'lardan `/login` sayfasına yönlendirilmelidir

#### FR-AUTH-002: Login Formu
- **Açıklama:** Login sayfası kullanıcı adı ve şifre alanları içermelidir.
- **Kabul Kriterleri:**
  - Kullanıcı adı input alanı (text)
  - Şifre input alanı (password)
  - "Giriş Yap" butonu
  - Test kullanıcı bilgisi gösterimi

#### FR-AUTH-003: Login Form Validasyonu
- **Açıklama:** Login formu client-side validasyon yapmalıdır.
- **Kabul Kriterleri:**
  - Kullanıcı adı boş bırakılamaz - "Kullanıcı adı zorunludur" hatası gösterilmelidir
  - Şifre boş bırakılamaz - "Şifre zorunludur" hatası gösterilmelidir
  - Hata mesajları input altında kırmızı renkte gösterilmelidir

#### FR-AUTH-004: Giriş İşlemi
- **Açıklama:** Kullanıcı giriş yapabilmelidir.
- **Kabul Kriterleri:**
  - "Giriş Yap" butonuna tıklandığında API'ye istek gönderilmelidir
  - Başarılı giriş sonrası token localStorage'a kaydedilmelidir
  - Kullanıcı bilgisi localStorage'a kaydedilmelidir
  - Başarılı giriş sonrası `/customers` sayfasına yönlendirilmelidir

#### FR-AUTH-005: Başarılı Giriş Bildirimi
- **Açıklama:** Başarılı giriş sonrası kullanıcıya bildirim gösterilmelidir.
- **Kabul Kriterleri:**
  - Yeşil renkli toast notification gösterilmelidir
  - "Giriş başarılı! Yönlendiriliyorsunuz..." mesajı gösterilmelidir
  - 1 saniye sonra yönlendirme yapılmalıdır

#### FR-AUTH-006: Hatalı Giriş Bildirimi
- **Açıklama:** Hatalı giriş denemesinde kullanıcıya bildirim gösterilmelidir.
- **Kabul Kriterleri:**
  - Kırmızı renkli toast notification gösterilmelidir
  - 401/403 hatası için "Kullanıcı adı veya şifre hatalı" mesajı gösterilmelidir
  - Diğer hatalar için API'den gelen hata mesajı gösterilmelidir

#### FR-AUTH-007: Giriş Butonu Loading Durumu
- **Açıklama:** Giriş işlemi sırasında buton durumu değişmelidir.
- **Kabul Kriterleri:**
  - Submit sırasında buton "Giriş yapılıyor..." durumuna geçmelidir
  - Submit sırasında buton disable olmalıdır
  - Spinner/loading göstergesi görünmelidir

---

### 2.2 Kimlik Doğrulama Koruması (Auth Guard)

#### FR-AUTH-008: Route Koruması
- **Açıklama:** Korumalı sayfalar token olmadan erişilemez olmalıdır.
- **Kabul Kriterleri:**
  - Token yoksa `/login` sayfasına yönlendirilmelidir
  - Token varsa korumalı sayfalara erişim sağlanmalıdır
  - Return URL ile giriş sonrası doğru sayfaya yönlendirilmelidir

#### FR-AUTH-009: Token Yönetimi
- **Açıklama:** JWT token localStorage'da saklanmalıdır.
- **Kabul Kriterleri:**
  - Token `access_token` key'i ile localStorage'a kaydedilmelidir
  - Token tüm API isteklerine `Authorization: Bearer {token}` header'ı olarak eklenmelidir
  - Logout işlemi token'ı localStorage'dan silmelidir

---

### 2.3 Kullanıcı Bilgisi Gösterimi

#### FR-AUTH-010: Header'da Kullanıcı Bilgisi
- **Açıklama:** Giriş yapan kullanıcının bilgisi header'da gösterilmelidir.
- **Kabul Kriterleri:**
  - Kullanıcı adı ve soyadı (fullName) görünmelidir
  - Kullanıcı rolü (Yönetici, Kullanıcı, vb.) görünmelidir
  - Avatar'da kullanıcının baş harfleri görünmelidir

#### FR-AUTH-011: Kullanıcı Menüsü
- **Açıklama:** Kullanıcı menüsü açılıp kapatılabilmelidir.
- **Kabul Kriterleri:**
  - Kullanıcı avatar'ına tıklandığında dropdown menü açılmalıdır
  - Menü "Profil", "Ayarlar" ve "Çıkış Yap" seçeneklerini içermelidir

#### FR-AUTH-012: Çıkış İşlemi
- **Açıklama:** Kullanıcı çıkış yapabilmelidir.
- **Kabul Kriterleri:**
  - "Çıkış Yap" menü öğesine tıklandığında logout işlemi yapılmalıdır
  - Token ve kullanıcı bilgisi localStorage'dan silinmelidir
  - `/login` sayfasına yönlendirilmelidir
  - Kullanıcı state'i null yapılmalıdır

---

## 3. API Entegrasyon Gereksinimleri

### API-CUS-001: Müşteri Listesi Endpoint
- **Endpoint:** `GET /api/v1/customers/individual/`
- **Response:** 
  ```json
  { 
    "total": "number", 
    "customers": [
      {
        "id": "number",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "natId": "string",
        "fatherName": "string",
        "birthDate": "ISO date string",
        "createdAt": "ISO date string"
      }
    ]
  }
  ```

### API-CUS-002: Müşteri Ekleme Endpoint
- **Endpoint:** `POST /api/v1/customers/individual/`
- **Request Body:**
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "natId": "string (11 karakter)",
    "fatherName": "string",
    "birthDate": "ISO date string",
    "password": "string (min 6 karakter)",
    "accountManagerId": "number (opsiyonel)"
  }
  ```
- **Response:** `IndividualCustomer` veya `null` (201 Created)

### API-CUS-003: Account Manager Dropdown Endpoint
- **Endpoint:** `GET /api/v1/account-managers/dropdown`
- **Response:** 
  ```json
  [
    { "id": "number", "fullName": "string" }
  ]
  ```

### API-AUTH-001: Login Endpoint
- **Endpoint:** `POST /api/v1/auth/login`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Success Response (200):**
  ```json
  {
    "access_token": "string (JWT)",
    "expires_in": "number (1800)",
    "token_type": "bearer",
    "user": {
      "id": "number",
      "username": "string",
      "email": "string",
      "fullName": "string",
      "userType": "string"
    }
  }
  ```
- **Error Response (401/403):** `"string"` (hata mesajı)

---

## 4. Test Cases

### 4.1 Müşteri Listeleme Test Cases

#### TC-CUS-001: Müşteri Listesi Başarılı Yükleme
- **Test Adı:** Müşteri listesi başarıyla yüklenmeli
- **Ön Koşullar:** 
  - Kullanıcı giriş yapmış olmalı
  - API müsait olmalı
- **Adımlar:**
  1. `/customers` sayfasına git
  2. Sayfanın yüklenmesini bekle
- **Beklenen Sonuç:**
  - Loading spinner görünmeli ve kaybolmalı
  - Müşteri listesi tablo formatında görünmeli
  - Toplam müşteri sayısı doğru gösterilmeli
  - Her müşteri için satır görünmeli

#### TC-CUS-002: Boş Müşteri Listesi
- **Test Adı:** Sistemde müşteri yoksa boş durum mesajı gösterilmeli
- **Ön Koşullar:**
  - Sistemde hiç müşteri olmamalı
- **Adımlar:**
  1. `/customers` sayfasına git
- **Beklenen Sonuç:**
  - "Henüz müşteri yok" mesajı görünmeli
  - "Sistemde kayıtlı müşteri bulunmamaktadır" açıklaması görünmeli

#### TC-CUS-003: Müşteri Listesi Yükleme Hatası
- **Test Adı:** API hatası durumunda hata mesajı gösterilmeli
- **Ön Koşullar:**
  - API hata döndürmeli (mock)
- **Adımlar:**
  1. `/customers` sayfasına git
- **Beklenen Sonuç:**
  - Hata mesajı görünmeli
  - "Tekrar Dene" butonu görünmeli
  - Butona tıklandığında yeniden yükleme yapılmalı

---

### 4.2 Müşteri Ekleme Test Cases (Ayrı Sayfa)

#### TC-CUS-004: Müşteri Ekleme Sayfasına Gitme
- **Test Adı:** "Yeni Müşteri Ekle" butonuna tıklandığında müşteri ekleme sayfası açılmalı
- **Ön Koşullar:**
  - `/customers` sayfasında olunmalı
- **Adımlar:**
  1. "Yeni Müşteri Ekle" butonunu bul
  2. Butona tıkla
- **Beklenen Sonuç:**
  - `/customers/add` sayfasına yönlendirilmeli
  - "Yeni Müşteri Ekle" başlığı görünmeli
  - Form alanları görünmeli

#### TC-CUS-005: Geri Dön Butonu
- **Test Adı:** "Geri Dön" butonuna tıklandığında müşteri listesine dönülmeli
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
- **Adımlar:**
  1. "Geri Dön" butonunu bul
  2. Butona tıkla
- **Beklenen Sonuç:**
  - `/customers` sayfasına yönlendirilmeli

#### TC-CUS-006: Geçerli Veri ile Müşteri Ekleme
- **Test Adı:** Tüm alanlar doğru doldurulduğunda müşteri başarıyla eklenmeli
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
- **Adımlar:**
  1. Ad alanına "Ahmet" yaz
  2. Soyad alanına "Yılmaz" yaz
  3. E-posta alanına "ahmet@example.com" yaz
  4. TC Kimlik No alanına "12345678901" yaz
  5. Baba Adı alanına "Mehmet" yaz
  6. Doğum Tarihi seç
  7. Şifre alanına "123456" yaz
  8. "Müşteri Ekle" butonuna tıkla
- **Beklenen Sonuç:**
  - "Müşteri başarıyla eklendi!" toast gösterilmeli
  - 1.5 saniye sonra `/customers` sayfasına yönlendirilmeli
  - Yeni müşteri listede görünmeli

#### TC-CUS-007: Boş Form ile Submit
- **Test Adı:** Boş form submit edildiğinde validasyon hataları gösterilmeli
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
- **Adımlar:**
  1. Hiçbir alan doldurmadan "Müşteri Ekle" butonuna tıkla
- **Beklenen Sonuç:**
  - Tüm zorunlu alanlar için hata mesajları görünmeli
  - Form submit edilmemeli
  - Sayfada kalınmalı

#### TC-CUS-008: Geçersiz E-posta ile Submit
- **Test Adı:** Geçersiz e-posta formatı girildiğinde hata gösterilmeli
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
- **Adımlar:**
  1. E-posta alanına "geçersizemail" yaz
  2. Diğer alanları geçerli şekilde doldur
  3. "Müşteri Ekle" butonuna tıkla
- **Beklenen Sonuç:**
  - "Geçerli bir e-posta adresi giriniz" hatası gösterilmeli
  - Form submit edilmemeli

#### TC-CUS-009: Geçersiz TC Kimlik No ile Submit
- **Test Adı:** 11 haneden farklı TC Kimlik No girildiğinde hata gösterilmeli
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
- **Adımlar:**
  1. TC Kimlik No alanına "12345" yaz
  2. Diğer alanları geçerli şekilde doldur
  3. "Müşteri Ekle" butonuna tıkla
- **Beklenen Sonuç:**
  - "TC Kimlik No 11 haneli olmalıdır" hatası gösterilmeli
  - Form submit edilmemeli

#### TC-CUS-010: Kısa Şifre ile Submit
- **Test Adı:** 6 karakterden az şifre girildiğinde hata gösterilmeli
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
- **Adımlar:**
  1. Şifre alanına "123" yaz
  2. Diğer alanları geçerli şekilde doldur
  3. "Müşteri Ekle" butonuna tıkla
- **Beklenen Sonuç:**
  - "Şifre en az 6 karakter olmalıdır" hatası gösterilmeli
  - Form submit edilmemeli

#### TC-CUS-011: Account Manager Seçimi ile Müşteri Ekleme
- **Test Adı:** Account Manager seçilerek müşteri eklenebilmeli
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
  - Account Manager listesi dolu olmalı
- **Adımlar:**
  1. Tüm zorunlu alanları doldur
  2. Account Manager dropdown'ından bir manager seç
  3. "Müşteri Ekle" butonuna tıkla
- **Beklenen Sonuç:**
  - Müşteri başarıyla eklenmeli
  - Seçilen account manager ile ilişkilendirilmeli

#### TC-CUS-012: Formu Temizle
- **Test Adı:** "Formu Temizle" butonuna tıklandığında form sıfırlanmalı
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
- **Adımlar:**
  1. Birkaç alanı doldur
  2. "Formu Temizle" butonuna tıkla
- **Beklenen Sonuç:**
  - Tüm alanlar boşaltılmalı
  - Validasyon hataları temizlenmeli

#### TC-CUS-013: API Hatası Durumunda Hata Gösterimi
- **Test Adı:** Müşteri eklenirken API hatası alındığında kullanıcıya bildirilmeli
- **Ön Koşullar:**
  - `/customers/add` sayfasında olunmalı
  - API hata döndürmeli (mock)
- **Adımlar:**
  1. Formu geçerli şekilde doldur
  2. "Müşteri Ekle" butonuna tıkla
- **Beklenen Sonuç:**
  - Hata toast gösterilmeli
  - Sayfada kalınmalı
  - Form korunmalı

---

### 4.3 Login Test Cases

#### TC-AUTH-001: Başarılı Login
- **Test Adı:** Geçerli kullanıcı adı ve şifre ile giriş yapılabilmeli
- **Ön Koşullar:**
  - `/login` sayfasında olunmalı
- **Adımlar:**
  1. Kullanıcı adı alanına "admin" yaz
  2. Şifre alanına "admin123" yaz
  3. "Giriş Yap" butonuna tıkla
- **Beklenen Sonuç:**
  - "Giriş başarılı! Yönlendiriliyorsunuz..." toast gösterilmeli
  - Token localStorage'a kaydedilmeli
  - Kullanıcı bilgisi localStorage'a kaydedilmeli
  - `/customers` sayfasına yönlendirilmeli

#### TC-AUTH-002: Hatalı Kullanıcı Adı ile Login
- **Test Adı:** Geçersiz kullanıcı adı ile giriş yapılamaz
- **Ön Koşullar:**
  - `/login` sayfasında olunmalı
- **Adımlar:**
  1. Kullanıcı adı alanına "wronguser" yaz
  2. Şifre alanına "admin123" yaz
  3. "Giriş Yap" butonuna tıkla
- **Beklenen Sonuç:**
  - "Kullanıcı adı veya şifre hatalı" toast gösterilmeli
  - Login sayfasında kalınmalı
  - Token kaydedilmemeli

#### TC-AUTH-003: Hatalı Şifre ile Login
- **Test Adı:** Geçersiz şifre ile giriş yapılamaz
- **Ön Koşullar:**
  - `/login` sayfasında olunmalı
- **Adımlar:**
  1. Kullanıcı adı alanına "admin" yaz
  2. Şifre alanına "wrongpassword" yaz
  3. "Giriş Yap" butonuna tıkla
- **Beklenen Sonuç:**
  - "Kullanıcı adı veya şifre hatalı" toast gösterilmeli
  - Login sayfasında kalınmalı

#### TC-AUTH-004: Boş Form ile Login
- **Test Adı:** Boş form ile giriş yapılamaz
- **Ön Koşullar:**
  - `/login` sayfasında olunmalı
- **Adımlar:**
  1. Hiçbir alan doldurmadan "Giriş Yap" butonuna tıkla
- **Beklenen Sonuç:**
  - "Kullanıcı adı zorunludur" hatası gösterilmeli
  - "Şifre zorunludur" hatası gösterilmeli
  - Form submit edilmemeli

#### TC-AUTH-005: Token ile Otomatik Giriş
- **Test Adı:** Geçerli token varsa direkt korumalı sayfaya erişilebilmeli
- **Ön Koşullar:**
  - localStorage'da geçerli token olmalı
- **Adımlar:**
  1. `/customers` sayfasına git
- **Beklenen Sonuç:**
  - Login sayfasına yönlendirilmemeli
  - Direkt müşteri listesi görünmeli

#### TC-AUTH-006: Token Yokken Korumalı Sayfaya Erişim
- **Test Adı:** Token yoksa korumalı sayfalara erişilemez
- **Ön Koşullar:**
  - localStorage'da token olmamalı
- **Adımlar:**
  1. `/customers` sayfasına gitmeye çalış
- **Beklenen Sonuç:**
  - `/login` sayfasına yönlendirilmeli

#### TC-AUTH-007: Logout İşlemi
- **Test Adı:** Çıkış yapıldığında token silinmeli ve login sayfasına yönlendirilmeli
- **Ön Koşullar:**
  - Kullanıcı giriş yapmış olmalı
- **Adımlar:**
  1. Header'daki kullanıcı avatar'ına tıkla
  2. "Çıkış Yap" menü öğesine tıkla
- **Beklenen Sonuç:**
  - Token localStorage'dan silinmeli
  - Kullanıcı bilgisi localStorage'dan silinmeli
  - `/login` sayfasına yönlendirilmeli

#### TC-AUTH-008: Header'da Kullanıcı Bilgisi Gösterimi
- **Test Adı:** Giriş yapan kullanıcının bilgisi header'da görünmeli
- **Ön Koşullar:**
  - Kullanıcı "System Admin" olarak giriş yapmış olmalı
- **Adımlar:**
  1. Herhangi bir korumalı sayfada ol
  2. Header'a bak
- **Beklenen Sonuç:**
  - Kullanıcı adı "System Admin" görünmeli
  - Kullanıcı rolü "Yönetici" görünmeli
  - Avatar'da "SA" baş harfleri görünmeli

---

## Versiyon Bilgisi
- **Döküman Versiyonu:** 2.0
- **Oluşturma Tarihi:** 28 Kasım 2025
- **Son Güncelleme:** 5 Aralık 2025
