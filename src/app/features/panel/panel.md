# PanelService (`panel.ts`)

## Amaç
Panel verilerini Firestore üzerinden yönetmek için servis sağlar. Öğrenci, öğretmen ve veli panelleri için ilgili verileri çeker.

## Injectable
`providedIn: 'root'` ile global olarak kullanılabilir.

## Kullanılan Servisler
- `Firestore`: Firebase veritabanı işlemleri için

## Metodlar
- `getStudentPanel(uid: string)`: Öğrenciye özel görev, ders, ödül verilerini çeker.
- `getTeacherPanel(uid: string)`: Öğretmenin atadığı görevler ve takip ettiği öğrencileri çeker.
- `getParentPanel(uid: string)`: Veliye özel çocuk gelişim raporlarını çeker.

## Test
- Birim testler için `panel.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `panel.ts`: Servis mantığı
- `panel.spec.ts`: Test
- `panel.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
