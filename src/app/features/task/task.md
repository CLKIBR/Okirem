# TaskService (`task.ts`)

## Amaç
Görev (task) verilerini Firestore üzerinden yönetmek için servis sağlar. Görevleri listeleme, tekil görev çekme, yeni görev ekleme ve görev oynama işlemlerini içerir.

## Injectable
`providedIn: 'root'` ile global olarak kullanılabilir.

## Kullanılan Servisler
- `Firestore`: Firebase veritabanı işlemleri için

## Metodlar
- `getTasks()`: Tüm görevleri Firestore'dan çeker.
- `getTask(id: string)`: Belirtilen görev kimliği ile tekil görev verisini çeker.
- `addTask(data: any)`: Yeni görev ekler.
- `playTask(id: string, result: any)`: Görev sonucunu günceller.

## Test
- Birim testler için `task.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `task.ts`: Servis mantığı
- `task.spec.ts`: Test
- `task.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
