# StudentPanelComponent (`student-panel.ts`)

## Selector
`app-student-panel`

## Amaç
Öğrenciye özel panelde dersler, görevler, ödüller, liderlik tablosu ve profil verilerini gösterir. Tüm veriler Firestore'dan çekilir ve güncellenebilir.

## Kullanılan Modüller
- `CommonModule`

## Servisler
- `LessonService`: Ders verilerini almak için
- `TaskService`: Görev verilerini almak ve tamamlamak için
- `RewardService`: Ödül verilerini almak ve kazanmak için
- `Leaderboard`: Liderlik tablosu verilerini almak için
- `UserService`: Profil verilerini almak ve güncellemek için

## Signals
- `lessons`: Ders listesi
- `tasks`: Görev listesi
- `rewards`: Ödül listesi
- `leaderboard`: Liderlik tablosu
- `profile`: Kullanıcı profil verisi

## Özellikler
- `uid`: Kullanıcı kimliği (demo-student, gerçek uygulamada auth'dan alınır)

## Metodlar
- `loadPanelData()`: Tüm panel verilerini Firestore'dan çeker ve signal'lara atar.
- `completeTask(taskId)`: Görev tamamlama işlemi
- `earnReward(rewardId)`: Ödül kazanma işlemi
- `updateProfile(data)`: Profil güncelleme işlemi

## Erişilebilirlik
- Tüm veriler signal ile yönetilir.

## Test
- Birim testler için `student-panel.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `student-panel.ts`: Component mantığı
- `student-panel.html`: Template
- `student-panel.scss`: Stil
- `student-panel.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
