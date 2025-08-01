# AdminPanelDashboardComponent (`admin-panel-dashboard.ts`)

## Selector
`app-admin-panel-dashboard`

## Amaç
Yönetici panelinde kullanıcı listesini ve rol atama işlemlerini yönetir. Kullanıcılar AdminPanelService ile çekilir, hata yönetimi yapılır.

## Kullanılan Modüller
- `CommonModule`

## Servisler
- `AdminPanelService`: Kullanıcı listesini ve rol atama işlemlerini yönetmek için kullanılır.

## Signals
- `users`: Kullanıcı listesi
- `error`: Hata mesajı

## Metodlar
- `ngOnInit()`: Component başlatıldığında kullanıcıları yükler.
- `loadUsers()`: Kullanıcı listesini çeker, hata durumunda `error` signal'ını günceller.
- `setRole(id, role)`: Kullanıcıya rol atar ve kullanıcı listesini günceller.

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.

## Test
- Birim testler için `admin-panel-dashboard.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `admin-panel-dashboard.ts`: Component mantığı
- `admin-panel-dashboard.html`: Template
- `admin-panel-dashboard.scss`: Stil
- `admin-panel-dashboard.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
