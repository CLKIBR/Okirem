# RoleManagementDashboardComponent (`role-management-dashboard.ts`)

## Selector
`app-role-management-dashboard`

## Amaç
Kullanıcıların rollerini yönetmek ve rol atama işlemlerini gerçekleştirmek için kullanılır. Rolleri listeler, kullanıcıya rol atar ve hata yönetimi sağlar.

## Kullanılan Modüller
- `CommonModule`
- `FormsModule`

## Servisler
- `RoleManagementService`: Roller ve rol atama işlemleri için kullanılır.

## Signals
- `roles`: Rol listesi
- `selectedUserId`: Seçili kullanıcı kimliği
- `selectedRole`: Seçili rol
- `error`: Hata mesajı

## Metodlar
- `ngOnInit()`: Component başlatıldığında rolleri yükler.
- `loadRoles()`: Roller listesini çeker, hata durumunda `error` signal'ını günceller.
- `setUserRole()`: Seçili kullanıcıya rol atar, hata durumunda `error` signal'ını günceller.

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `role-management-dashboard.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `role-management-dashboard.ts`: Component mantığı
- `role-management-dashboard.html`: Template
- `role-management-dashboard.scss`: Stil
- `role-management-dashboard.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
