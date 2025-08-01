# NotificationListComponent

**Dosya:** notification-list.ts

## Selector
`app-notification-list`

## Template
`notification-list.html`

## Styles
`notification-list.scss`

## Özellikler
- `notifications: Signal<any[]>` — Bildirim listesi
- `error: Signal<string | null>` — Hata mesajı
- `notificationService: NotificationService` — Bildirim servis bağımlılığı
- `uid: string` — Kullanıcı ID

## Metodlar
- `loadNotifications()` — Bildirimleri async olarak yükler
- `markAsRead(id: string)` — Bildirimi okundu olarak işaretler

## Kullanım
```html
<app-notification-list></app-notification-list>
```

## Açıklama
Kullanıcıya bildirimleri listeleme ve okundu olarak işaretleme imkanı sunar. Hata yönetimi ve modern arayüz ile tam entegredir.
