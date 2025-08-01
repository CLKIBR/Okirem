# RewardStoreComponent (`reward-store.ts`)

## Selector
`app-reward-store`

## Amaç
Kullanıcıya sunulan ödülleri listeler ve ödül kazanma işlemini yönetir. Firestore'dan veri çeker, hata ve başarı durumlarını yönetir.

## Kullanılan Modüller
- `CommonModule`

## Servisler
- `RewardService`: Ödül verilerini almak ve kazanmak için kullanılır.

## Signals
- `rewards`: Ödül listesi
- `error`: Hata mesajı
- `success`: Başarı mesajı

## Özellikler
- `uid`: Kullanıcı kimliği (demo-student, gerçek uygulamada auth'dan alınır)

## Metodlar
- `loadRewards()`: Tüm ödülleri Firestore'dan çeker, hata durumunda `error` signal'ını günceller.
- `earnReward(rewardId)`: Ödül kazanma işlemini yapar, başarılıysa `success`, hatalıysa `error` signal'ını günceller ve ödülleri yeniden yükler.

## Erişilebilirlik
- Hata ve başarı mesajları signal ile yönetilir.

## Test
- Birim testler için `reward-store.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `reward-store.ts`: Component mantığı
- `reward-store.html`: Template
- `reward-store.scss`: Stil
- `reward-store.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
