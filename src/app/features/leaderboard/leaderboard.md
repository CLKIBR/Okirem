# Leaderboard Service (`leaderboard.ts`)

## Amaç
Kullanıcıların puanlarına göre sıralandığı liderlik tablosunu Firestore üzerinden yönetmek için servis sağlar.

## Injectable
`providedIn: 'root'` ile global olarak kullanılabilir.

## Kullanılan Servisler
- `Firestore`: Firebase veritabanı işlemleri için

## Metodlar
- `getLeaderboard(top: number = 10)`: En yüksek puanlı ilk `top` kullanıcıyı Firestore'dan çeker.

## Test
- Birim testler için `leaderboard.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `leaderboard.ts`: Servis mantığı
- `leaderboard.spec.ts`: Test
- `leaderboard.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
