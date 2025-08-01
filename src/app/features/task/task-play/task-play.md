# TaskPlayComponent (`task-play.ts`)

## Selector
`app-task-play`

## Amaç
Belirli bir görevi oynama ve tamamlama işlemlerini sağlar. Firestore'dan veri çeker, hata ve başarı durumlarını yönetir.

## Kullanılan Modüller
- `CommonModule`
- `RouterLink`

## Servisler
- `TaskService`: Görev verilerini almak ve güncellemek için kullanılır.
- `ActivatedRoute`: URL'den görev kimliğini almak için kullanılır.

## Signals
- `task`: Görev verisi
- `error`: Hata mesajı
- `success`: Başarı mesajı

## Özellikler
- `id`: Görev kimliği (URL'den alınır)

## Metodlar
- `loadTask()`: Belirli bir görevi Firestore'dan çeker, hata durumunda `error` signal'ını günceller.
- `playTask()`: Görevi tamamlar, başarılıysa `success`, hatalıysa `error` signal'ını günceller ve görevi yeniden yükler.

## Erişilebilirlik
- Hata ve başarı mesajları signal ile yönetilir.

## Test
- Birim testler için `task-play.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `task-play.ts`: Component mantığı
- `task-play.html`: Template
- `task-play.scss`: Stil
- `task-play.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
