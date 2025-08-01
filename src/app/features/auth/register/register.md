# RegisterComponent (`register.ts`)

## Selector
`app-register`

## Amaç
Kullanıcıların e-posta ve şifre ile kayıt olmasını sağlar. Başarılı kayıttan sonra panel sayfasına yönlendirir, hata yönetimi yapar.

## Kullanılan Modüller
- `CommonModule`
- `FormsModule`

## Servisler
- `AuthService`: Kayıt işlemini yönetmek için kullanılır.
- `Router`: Başarılı kayıttan sonra yönlendirme için kullanılır.

## Signals
- `error`: Hata mesajı

## Metodlar
- `register(email, password)`: Kayıt işlemini yapar, başarılıysa panel sayfasına yönlendirir, hatalıysa hata mesajı gösterir.

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `register.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `register.ts`: Component mantığı
- `register.html`: Template
- `register.scss`: Stil
- `register.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
