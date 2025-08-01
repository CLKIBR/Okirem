# LessonDetailComponent (`lesson-detail.ts`)

## Selector
`app-lesson-detail`

## Amaç
Belirli bir dersin detaylarını görüntüleme ve güncelleme işlemlerini sağlar. Firestore'dan veri çeker, hata ve başarı durumlarını yönetir.

## Kullanılan Modüller
- `CommonModule`
- `FormsModule`
- `RouterLink`

## Servisler
- `LessonService`: Ders verilerini almak ve güncellemek için kullanılır.
- `ActivatedRoute`: URL'den ders kimliğini almak için kullanılır.

## Signals
- `lesson`: Ders verisi
- `error`: Hata mesajı
- `success`: Başarı mesajı

## Özellikler
- `id`: Ders kimliği (URL'den alınır)

## Metodlar
- `loadLesson()`: Belirli bir dersi Firestore'dan çeker, hata durumunda `error` signal'ını günceller.
- `updateLesson(data)`: Ders güncelleme işlemini yapar, başarılıysa `success`, hatalıysa `error` signal'ını günceller ve dersi yeniden yükler.

## Erişilebilirlik
- Hata ve başarı mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `lesson-detail.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `lesson-detail.ts`: Component mantığı
- `lesson-detail.html`: Template
- `lesson-detail.scss`: Stil
- `lesson-detail.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
