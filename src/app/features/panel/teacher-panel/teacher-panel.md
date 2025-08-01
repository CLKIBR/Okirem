# TeacherPanelComponent (`teacher-panel.ts`)

## Selector
`app-teacher-panel`

## Amaç
Öğretmene özel panelde dersler, görevler, öğrenciler ve liderlik tablosu verilerini gösterir. Firestore'dan veri çeker ve güncelleyebilir.

## Kullanılan Modüller
- `CommonModule`

## Servisler
- `LessonService`: Ders verilerini almak ve eklemek için
- `TaskService`: Görev verilerini almak ve eklemek için
- `UserService`: Öğrenci verilerini almak için (demo veri ile)
- `RewardService`: Ödül vermek için
- `LeaderboardService`: Liderlik tablosu verilerini almak için

## Signals
- `lessons`: Ders listesi
- `tasks`: Görev listesi
- `students`: Öğrenci listesi (demo veri)
- `leaderboard`: Liderlik tablosu

## Metodlar
- `loadPanelData()`: Tüm panel verilerini Firestore'dan çeker ve signal'lara atar.
- `addLesson()`, `editLesson(lessonId)`, `deleteLesson(lessonId)`: Ders işlemleri (edit/delete stub)
- `addTask()`, `editTask(taskId)`, `deleteTask(taskId)`: Görev işlemleri (edit/delete stub)
- `giveReward(studentId)`: Öğrenciye ödül verme

## Erişilebilirlik
- Tüm veriler signal ile yönetilir.

## Test
- Birim testler için `teacher-panel.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `teacher-panel.ts`: Component mantığı
- `teacher-panel.html`: Template
- `teacher-panel.scss`: Stil
- `teacher-panel.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
