# SecurityDashboardComponent (`security-dashboard.ts`)

## Selector
`app-security-dashboard`

## Amaç
Kullanıcıların aktif oturumlarını ve güvenlik durumunu gösterir. Oturum verileri SecurityService ile çekilir, hata yönetimi yapılır.

## Kullanılan Modüller
- `CommonModule`

## Servisler
- `SecurityService`: Aktif oturumları almak için kullanılır.

## Signals
- `sessions`: Aktif oturumlar listesi
- `error`: Hata mesajı

## Metodlar
- `ngOnInit()`: Component başlatıldığında oturumları yükler.
- `loadSessions()`: Oturum verilerini çeker, hata durumunda `error` signal'ını günceller.

## Change Detection
- `ChangeDetectionStrategy.OnPush` kullanılır.

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.

## Test
- Birim testler için `security-dashboard.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `security-dashboard.ts`: Component mantığı
- `security-dashboard.html`: Template
- `security-dashboard.scss`: Stil
- `security-dashboard.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
