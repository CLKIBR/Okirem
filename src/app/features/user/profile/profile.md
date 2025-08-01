# ProfileComponent (`profile.ts`)

## Selector
`app-profile`

## Amaç
Kullanıcının profil bilgilerini görüntüleme ve güncelleme işlemlerini sağlar. Firebase'den alınan verilerle çalışır, hata ve başarı durumlarını yönetir.

## Kullanılan Modüller
- `CommonModule`
- `FormsModule`

## Servisler
- `UserService`: Profil verilerini almak ve güncellemek için kullanılır.

## Signals
- `profile`: Kullanıcı profil verisi
- `error`: Hata mesajı
- `success`: Başarı mesajı

## Özellikler
- `uid`: Kullanıcı kimliği (demo-student, gerçek uygulamada auth'dan alınır)

## Metodlar
- `loadProfile()`: Kullanıcı profilini Firebase'den çeker, hata durumunda `error` signal'ını günceller.
- `updateProfile(data)`: Profil güncelleme işlemini yapar, başarılıysa `success`, hatalıysa `error` signal'ını günceller ve profili yeniden yükler.

## Erişilebilirlik
- Hata ve başarı mesajları signal ile yönetilir.
- Formlar için `FormsModule` kullanılır.

## Test
- Birim testler için `profile.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `profile.ts`: Component mantığı
- `profile.html`: Template
- `profile.scss`: Stil
- `profile.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
