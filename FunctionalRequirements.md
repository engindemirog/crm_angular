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

## 3. API Entegrasyon Gereksinimleri

### API-CUS-001: Müşteri Listesi Endpoint
- **Endpoint:** `GET /api/v1/customers/individual/`
- **Response:** `{ total: number, customers: IndividualCustomer[] }`

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
- **Response:** `IndividualCustomer`

### API-CUS-003: Account Manager Dropdown Endpoint
- **Endpoint:** `GET /api/v1/account-managers/dropdown`
- **Response:** `AccountManagerDropdown[]`
  ```json
  [
    { "id": number, "fullName": "string" }
  ]
  ```

---

## Versiyon Bilgisi
- **Döküman Versiyonu:** 1.0
- **Oluşturma Tarihi:** 28 Kasım 2025
- **Son Güncelleme:** 28 Kasım 2025
