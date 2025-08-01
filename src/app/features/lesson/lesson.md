# LessonService (`lesson.ts`)

## Amaç
Ders verilerini Firestore üzerinden yönetmek için servis sağlar. Dersleri listeleme, tekil ders çekme ve yeni ders ekleme işlemlerini içerir.

## Injectable
`providedIn: 'root'` ile global olarak kullanılabilir.

## Kullanılan Servisler
- `Firestore`: Firebase veritabanı işlemleri için

## Metodlar
- `getLessons()`: Tüm dersleri Firestore'dan çeker.
- `getLesson(id: string)`: Belirtilen ders kimliği ile tekil ders verisini çeker.
- `addLesson(data: any)`: Yeni ders ekler.

## Test
- Birim testler için `lesson.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `lesson.ts`: Servis mantığı
- `lesson.spec.ts`: Test
- `lesson.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
