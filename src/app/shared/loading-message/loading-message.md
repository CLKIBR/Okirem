# LoadingMessageComponent

**Dosya:** loading-message.ts

## Selector
`app-loading-message`

## Template
Inline

## Styles
`loading-message.scss`

## Özellikler
- `loading: boolean` — Yüklenme durumu (Input)
- `text: string | null` — Gösterilecek yükleniyor mesajı (Input)

## Kullanım
```html
<app-loading-message [loading]="isLoading" text="Veriler yükleniyor..."></app-loading-message>
```

## Açıklama
Erişilebilir loading mesajı bileşeni. Tüm modüllerde ortak loading yönetimi için kullanılabilir. ARIA ve role ile tam uyumlu.
