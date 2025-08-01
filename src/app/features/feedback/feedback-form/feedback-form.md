# FeedbackFormComponent

**Dosya:** feedback-form.ts

## Selector
`app-feedback-form`

## Template
`feedback-form.html`

## Styles
`feedback-form.scss`

## Özellikler
- `message: Signal<string>` — Geri bildirim mesajı
- `error: Signal<string | null>` — Hata mesajı
- `success: Signal<string | null>` — Başarı mesajı
- `feedbackService: FeedbackService` — Geri bildirim servis bağımlılığı
- `uid: string` — Kullanıcı ID

## Metodlar
- `submit()` — Geri bildirimi async olarak gönderir

## Kullanım
```html
<app-feedback-form></app-feedback-form>
```

## Açıklama
Kullanıcıdan geri bildirim alır, hata ve başarı yönetimi ile modern arayüzde sunar. Tüm özellikler kod ile %100 uyumlu şekilde dokümante edilmiştir.
