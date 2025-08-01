# TaskListComponent (`task-list.ts`)

## Selector
`app-task-list`

## Amaç
Tüm görevleri listeleme ve yeni görev ekleme işlemlerini sağlar. Firestore'dan veri çeker, hata ve başarı durumlarını yönetir.

## Kullanılan Modüller
- `CommonModule`
- `FormsModule`
- `RouterLink`

## Servisler
- `TaskService`: Görev verilerini almak ve eklemek için kullanılır.

## Signals
- `tasks`: Görev listesi
- `error`: Hata mesajı
- `success`: Başarı mesajı

## Metodlar
- `loadTasks()`: Tüm görevleri Firestore'dan çeker, hata durumunda `error` signal'ını günceller.
- `addTask(data)`: Yeni görev ekler, başarılıysa `success`, hatalıysa `error` signal'ını günceller ve görevleri yeniden yükler.

## Erişilebilirlik
- Hata ve başarı mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `task-list.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `task-list.ts`: Component mantığı
- `task-list.html`: Template
- `task-list.scss`: Stil
- `task-list.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
