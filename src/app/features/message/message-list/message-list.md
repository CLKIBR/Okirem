# MessageListComponent (`message-list.ts`)

## Selector
`app-message-list`

## Amaç
Kullanıcılar arasında mesajlaşma listesini gösterir ve yeni mesaj gönderme işlemini yönetir. Demo veriler ile çalışır, ileride servis entegrasyonu yapılabilir.

## Kullanılan Modüller
- `CommonModule`
- `DatePipe`
- `FormsModule`
- `BrowserModule`

## Signals
- `messages`: Mesaj listesi
- `error`: Hata mesajı
- `messageText`: Mesaj metni

## Metodlar
- `sendMessage(msg)`: Yeni mesajı listeye ekler ve metin alanını temizler (demo, ileride servis ile güncellenecek)

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `message-list.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `message-list.ts`: Component mantığı
- `message-list.html`: Template
- `message-list.scss`: Stil
- `message-list.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
