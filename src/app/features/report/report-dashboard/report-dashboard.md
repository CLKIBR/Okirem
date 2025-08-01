# ReportDashboardComponent

**Dosya:** report-dashboard.ts

## Selector
`app-report-dashboard`

## Template
`report-dashboard.html`

## Styles
`report-dashboard.scss`

## Özellikler
- `userReport: Signal<any[]>` — Kullanıcı rapor verileri
- `lessonReport: Signal<any[]>` — Ders rapor verileri
- `taskReport: Signal<any[]>` — Görev rapor verileri
- `rewardReport: Signal<any[]>` — Ödül rapor verileri
- `error: Signal<string | null>` — Hata mesajı
- `reportService: ReportService` — Rapor servis bağımlılığı

## Metodlar
- `ngOnInit()` — Raporları yükler
- `loadReports()` — Tüm rapor verilerini async olarak yükler
- `exportCSV()` — Tüm raporları CSV olarak dışa aktarır

## Kullanım
```html
<app-report-dashboard></app-report-dashboard>
```

## ChangeDetection
`OnPush`

## Açıklama
Raporlama dashboard'u; kullanıcı, ders, görev ve ödül raporlarını gösterir. CSV dışa aktarma, hata yönetimi ve modern arayüz ile tam entegredir.
