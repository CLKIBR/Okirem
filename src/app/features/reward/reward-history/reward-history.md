# RewardHistoryComponent (`reward-history.ts`)

## Selector
`app-reward-history`

## Amaç
Kullanıcının ödül geçmişini Firestore'dan çekip listeler. Hata durumlarını yönetir.

## Kullanılan Modüller
- `CommonModule`

## Servisler
- `RewardService`: Ödül geçmişini almak için kullanılır.

## Signals
- `history`: Ödül geçmişi listesi
- `error`: Hata mesajı

## Özellikler
- `uid`: Kullanıcı kimliği (demo-student, gerçek uygulamada auth'dan alınır)

## Metodlar
- `loadHistory()`: Ödül geçmişini Firestore'dan çeker, hata durumunda `error` signal'ını günceller.

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.

## Test
- Birim testler için `reward-history.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `reward-history.ts`: Component mantığı
- `reward-history.html`: Template
- `reward-history.scss`: Stil
- `reward-history.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
