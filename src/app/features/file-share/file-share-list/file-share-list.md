# FileShareListComponent

**Dosya:** file-share-list.ts

## Selector
`app-file-share-list`

## Template
`file-share-list.html`

## Styles
`file-share-list.scss`

## Özellikler
- `files: Signal<string[]>` — Dosya listesi
- `error: Signal<string | null>` — Hata mesajı
- `fileShareService: FileShareService` — Dosya paylaşım servis bağımlılığı
- `uid: string` — Kullanıcı ID

## Metodlar
- `ngOnInit()` — Dosya listesini yükler
- `loadFiles()` — Dosyaları async olarak yükler
- `upload(event: Event)` — Dosya yükler

## Kullanım
```html
<app-file-share-list></app-file-share-list>
```

## Açıklama
Kullanıcıya dosya yükleme ve indirme imkanı sunar. Hata yönetimi ve modern arayüz ile tam entegredir.
