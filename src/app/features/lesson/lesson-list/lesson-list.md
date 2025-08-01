# LessonListComponent (`lesson-list.ts`)

## Selector
`app-lesson-list`

## Amaç
Tüm dersleri listeleme ve yeni ders ekleme işlemlerini sağlar. Firestore'dan veri çeker, hata ve başarı durumlarını yönetir.

## Kullanılan Modüller
- `CommonModule`
- `FormsModule`
- `RouterLink`

## Servisler
- `LessonService`: Ders verilerini almak ve eklemek için kullanılır.

## Signals
- `lessons`: Ders listesi
- `error`: Hata mesajı
- `success`: Başarı mesajı

## Metodlar
- `loadLessons()`: Tüm dersleri Firestore'dan çeker, hata durumunda `error` signal'ını günceller.
- `addLesson(data)`: Yeni ders ekler, başarılıysa `success`, hatalıysa `error` signal'ını günceller ve dersleri yeniden yükler.

## Erişilebilirlik
- Hata ve başarı mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `lesson-list.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `lesson-list.ts`: Component mantığı
- `lesson-list.html`: Template
- `lesson-list.scss`: Stil
- `lesson-list.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
