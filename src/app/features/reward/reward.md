# RewardService (`reward.ts`)

## Amaç
Ödül verilerini Firestore üzerinden yönetmek için servis sağlar. Ödülleri listeleme, tekil ödül çekme, ödül kazanma ve ödül geçmişini alma işlemlerini içerir.

## Injectable
`providedIn: 'root'` ile global olarak kullanılabilir.

## Kullanılan Servisler
- `Firestore`: Firebase veritabanı işlemleri için

## Metodlar
- `getRewards()`: Tüm ödülleri Firestore'dan çeker.
- `getReward(id: string)`: Belirtilen ödül kimliği ile tekil ödül verisini çeker.
- `earnReward(data: any)`: Ödül kazanma işlemini kaydeder.
- `getRewardHistory(uid: string)`: Kullanıcının ödül geçmişini çeker (filtreleme eklenebilir).

## Test
- Birim testler için `reward.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `reward.ts`: Servis mantığı
- `reward.spec.ts`: Test
- `reward.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
