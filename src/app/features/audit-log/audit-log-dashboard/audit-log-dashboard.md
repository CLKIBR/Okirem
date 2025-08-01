# AuditLogDashboardComponent

**Dosya:** audit-log-dashboard.ts

## Selector
`app-audit-log-dashboard`

## Template
`audit-log-dashboard.html`

## Styles
`audit-log-dashboard.scss`

## Özellikler
- `logs: Signal<any[]>` — Audit log verileri
- `error: Signal<string | null>` — Hata mesajı
- `search: string` — Arama filtresi
- `auditLogService: AuditLogService` — Audit log servis bağımlılığı

## Metodlar
- `ngOnInit()` — Logları yükler
- `loadLogs()` — Tüm logları async olarak yükler
- `exportCSV()` — Logları CSV olarak dışa aktarır

## Kullanım
```html
<app-audit-log-dashboard></app-audit-log-dashboard>
```

## Açıklama
Kullanıcı ve sistem aktivitelerini filtreleme, arama ve CSV dışa aktarma ile sunar. Hata yönetimi ve modern arayüz ile tam entegredir.
