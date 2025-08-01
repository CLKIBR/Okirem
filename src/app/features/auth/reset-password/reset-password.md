# ResetPasswordComponent (`reset-password.ts`)

## Selector
`app-reset-password`

## Amaç
Kullanıcıların e-posta ile şifre sıfırlama işlemini yapmasını sağlar. Başarılı işlemde bilgilendirme mesajı gösterir, hata yönetimi yapar.

## Kullanılan Modüller
- `CommonModule`
- `FormsModule`

## Servisler
- `AuthService`: Şifre sıfırlama işlemini yönetmek için kullanılır.
- `Router`: (Kullanılmıyor, ileride yönlendirme için eklenebilir)

## Signals
- `error`: Hata mesajı
- `success`: Başarı mesajı

## Metodlar
- `resetPassword(email)`: Şifre sıfırlama işlemini yapar, başarılıysa bilgilendirme mesajı gösterir, hatalıysa hata mesajı gösterir.

## Erişilebilirlik
- Hata ve başarı mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `reset-password.spec.ts` dosyası eklenebilir.

## Dosya Yapısı
- `reset-password.ts`: Component mantığı
- `reset-password.html`: Template
- `reset-password.scss`: Stil
- `reset-password.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
