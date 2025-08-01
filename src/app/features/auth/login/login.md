# LoginComponent (`login.ts`)

## Selector
`app-login`

## Amaç
Kullanıcıların e-posta ve şifre ile giriş yapmasını sağlar. Başarılı girişte panel sayfasına yönlendirir, hata yönetimi yapar.

## Kullanılan Modüller
- `CommonModule`
- `FormsModule`

## Servisler
- `AuthService`: Giriş işlemini yönetmek için kullanılır.
- `Router`: Başarılı girişte yönlendirme için kullanılır.

## Signals
- `error`: Hata mesajı

## Metodlar
- `login(email, password)`: Giriş işlemini yapar, başarılıysa panel sayfasına yönlendirir, hatalıysa hata mesajı gösterir.

## Erişilebilirlik
- Hata mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `login.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `login.ts`: Component mantığı
- `login.html`: Template
- `login.scss`: Stil
- `login.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
