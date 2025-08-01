# LeaderboardListComponent (`leaderboard-list.ts`)

## Selector
`app-leaderboard-list`

## Amaç
Liderlik tablosunu listeler ve hata yönetimi sağlar. Kullanıcılar puanlarına göre sıralanır.

## Kullanılan Modüller
- `CommonModule`

## Servisler
- `LeaderboardService`: Liderlik tablosu verisini almak için kullanılır.

## Signals
- `leaderboard`: Liderlik tablosu verisi
- `error`: Hata mesajı

## Metodlar
- `loadLeaderboard()`: Liderlik tablosunu çeker, hata durumunda `error` signal'ını günceller.

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.

## Test
- Birim testler için `leaderboard-list.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `leaderboard-list.ts`: Component mantığı
- `leaderboard-list.html`: Template
- `leaderboard-list.scss`: Stil
- `leaderboard-list.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
