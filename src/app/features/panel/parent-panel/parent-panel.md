# ParentPanelComponent (`parent-panel.ts`)

## Selector
`app-parent-panel`

## Amaç
Velinin çocuklarının gelişim durumunu, ders/görev/ödül geçmişini ve puanlarını görüntülemesini sağlar. Demo veriler ile çalışır.

## Kullanılan Modüller
- `CommonModule`
- `DatePipe`

## Signals
- `students`: Öğrenci listesi
- `selectedStudent`: Seçili öğrenci
- `lessons`: Ders geçmişi
- `tasks`: Görev geçmişi
- `rewards`: Ödül geçmişi

## Metodlar
- `viewStudent(studentId)`: Seçili öğrencinin ders, görev ve ödül geçmişini demo verilerle gösterir.

## Erişilebilirlik
- Tüm veriler signal ile yönetilir.

## Test
- Birim testler için `parent-panel.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `parent-panel.ts`: Component mantığı
- `parent-panel.html`: Template
- `parent-panel.scss`: Stil
- `parent-panel.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
