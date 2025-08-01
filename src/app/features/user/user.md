# UserService (`user.ts`)

## Amaç
Kullanıcı verilerini Firestore üzerinden yönetmek için servis sağlar. Profil alma, güncelleme ve rol atama işlemlerini içerir.

## Injectable
`providedIn: 'root'` ile global olarak kullanılabilir.

## Kullanılan Servisler
- `Firestore`: Firebase veritabanı işlemleri için
- `Auth`: Firebase kimlik doğrulama işlemleri için

## Metodlar
- `getProfile(uid: string)`: Belirtilen kullanıcı kimliği ile Firestore'dan profil verisini çeker.
- `updateProfile(uid: string, data: any)`: Kullanıcı profilini günceller.
- `setRole(uid: string, role: string)`: Kullanıcıya yeni rol atar.

## Test
- Birim testler için `user.spec.ts` dosyası kullanılabilir.

## Dosya Yapısı
- `user.ts`: Servis mantığı
- `user.spec.ts`: Test
- `user.md`: Dokümantasyon

---
Bu dosya, kod ile %100 uyumlu olarak otomatik oluşturulmuştur.
