# AnalyticsDashboardComponent

**Dosya:** analytics-dashboard.ts

## Selector
`app-analytics-dashboard`

## Template
`analytics-dashboard.html`

## Styles
`analytics-dashboard.scss`

## Özellikler
- `userStats: Signal<any>` — Kullanıcı istatistikleri
- `lessonStats: Signal<any>` — Ders istatistikleri
- `taskStats: Signal<any>` — Görev istatistikleri
- `rewardStats: Signal<any>` — Ödül istatistikleri
- `error: Signal<string | null>` — Hata mesajı
- `analyticsService: AnalyticsService` — Analitik servis bağımlılığı

## Metodlar
- `ngOnInit()` — Analitik verileri yükler
- `loadAnalytics()` — Tüm istatistikleri async olarak yükler

## Kullanım
```html
<app-analytics-dashboard></app-analytics-dashboard>
```

## ChangeDetection
`OnPush`

## Açıklama
Kullanıcı, ders, görev ve ödül istatistiklerini modern ve erişilebilir arayüzde sunar. Hata yönetimi ve performans optimizasyonu ile tam entegredir.
