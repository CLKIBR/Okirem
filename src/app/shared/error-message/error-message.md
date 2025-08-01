# ErrorMessageComponent

**Dosya:** error-message.ts

## Selector
`app-error-message`

## Template
Inline

## Styles
`error-message.scss`

## Özellikler
- `message: string | null` — Gösterilecek hata mesajı (Input)

## Kullanım
```html
<app-error-message [message]="error"></app-error-message>
```

## Açıklama
Erişilebilir hata mesajı bileşeni. Tüm modüllerde ortak hata yönetimi için kullanılabilir. ARIA ve role ile tam uyumlu.
