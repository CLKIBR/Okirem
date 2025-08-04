# Okirem – Oyunlaştırılmış 5-8. Sınıf Öğrenim Platformu  
## Frontend Mimari Yol Haritası (Angular 20+, SCSS, CoreUI)

---

## Faz 1: Temel Kurulum ve Altyapı

### 1.1. Proje Başlangıcı ve Yapılandırma
- Angular 20+ (standalone) yeni proje kurulumu (`ng new ... --standalone --style=scss`)✅
- CoreUI entegrasyonu (kurumsal tema + Angular modülleri)
- SCSS ve yardımcı yardımcı kütüphaneler (CoreUI ile uyumlu)
- Modüler, üç kademeli klasör yapısı (feature-based)
- Global SCSS yönetimi, dark/light tema desteği
- Ortak layout, header, footer ve responsive grid (CoreUI layout ile)

### 1.2. Core Katman
- Rol bazlı kimlik doğrulama (Firebase Auth, OAuth2 veya hazır altyapı)
- Kullanıcı ve rol yönetimi için state management (RxJS store veya alternatif)
- Ortak servisler: ApiClient, AuthService, UserService, ErrorHandler, Logger
- Guard’lar ve rol bazlı route erişim kontrolü
- Dinamik ana navigasyon, rol tabanlı menü
- Alert, modal, dialog servisleri (CoreUI uyumlu)

---

## Faz 2: Kullanıcı Akışları & Onboarding

### 2.1. Kayıt, Giriş ve Onboarding
- E-mail, şifre, Google vb. giriş ve kayıt akışı
- Rol seçimi: Öğrenci, Öğretmen, Veli için ayrı onboarding wizard
- Adım adım onboarding ekranları (sınıf, okul, favori ders, hedef, avatar)
- KVKK/GDPR rıza ekranları
- İlk girişte hızlı rehber/onboarding tour

### 2.2. Profil ve Ayarlar
- Profil görüntüleme ve güncelleme (avatar, bilgiler, parola)
- Veli-çocuk ve öğretmen-öğrenci bağlantısı yönetimi
- Bildirim tercihleri, gizlilik ve hesap silme

---

## Faz 3: Oyunlaştırılmış Öğrenim Modülleri

### 3.1. Ders & Görev Altyapısı
- Tüm branşlar için modüler ders yapısı (Türkçe, Matematik, Fen, İngilizce, Sosyal, Din, Bilişim vb.)
- Dinamik görev/sınav motoru (test, açık uçlu, sürükle-bırak, eşleştirme)
- Zorluk, puan, rozet/XP sistemleri
- Ders kartları, ilerleme barı
- Ödül mağazası ve avatar özelleştirme

### 3.2. Görev Oynama ve Geri Bildirim
- Görev başlatma, ipucu, zamanlayıcı
- Puanlama, dinamik anlık geri bildirimler
- Animasyonlu karakterlerle motivasyon (SVG, Lottie, CoreUI animasyon)
- Sonuç ekranı (puan, rozet, öneri)
- Yeniden başlatma, tekrar ve görev geçmişi

---

## Faz 4: Raporlama, Takip ve Paneller

### 4.1. Öğrenci Paneli
- Günlük/haftalık görev ve gelişim takibi
- Seviye, XP, liderlik tablosu, ödüller
- Çözülmemiş görevler, önerilen dersler
- İlerleme grafikleri (CoreUI Charts)

### 4.2. Öğretmen Paneli
- Sınıf ve öğrenci yönetimi
- Görev atama ve anlık izleme
- Öğrenci performans raporları ve grafikler
- Geri bildirim ve mesajlaşma

### 4.3. Veli Paneli
- Çocukların gelişim ve görev geçmişi
- Haftalık/aylık özet raporlar
- Bildirimler, ödül takibi, destek talepleri

---

## Faz 5: Kurumsal Standartlar, Test & DevOps

### 5.1. Sürdürülebilirlik ve Güvenlik
- Clean Architecture, DDD prensipli kod
- Erişilebilirlik (WCAG), yüksek performans, responsive arayüz
- API anahtarlarının .env’de tutulması, güvenlik önlemleri
- Üçüncü parti kütüphane güncelliği ve güvenlik taramaları

### 5.2. Test, CI/CD ve Dokümantasyon
- Unit ve e2e testler (%80+ coverage, Jest/Cypress)
- Tüm modül/feature için .md dokümantasyon
- Kullanım kılavuzu, yol haritası, onboarding
- Conventional Commit, branch/pull request yönetimi
- CI/CD pipeline, otomatik test ve deployment

---

## Faz 6: Medya, Depolama, Entegrasyonlar

- Medya yönetimi: avatar, belge, ödül için Cloudinary/Firebase Storage
- CDN ve medya optimizasyonu
- Üçüncü parti eğitim API’leriyle entegrasyon (isteğe bağlı)

---

## Faz 7: Gelişim, Topluluk ve Sürdürülebilirlik

- Açık kaynak altyapısı, topluluk katkısı, lisanslama
- Sürekli güncelleme, bakım ve versiyon yönetimi
- Geri bildirim, destek ve ticket sistemi
- Uzun vadeli roadmap, yeni faz planlamaları

---

**Not:**  
Her faz kendi içinde tamamlandığında test ve review sürecinden geçirilecektir. Dosya/klasör yapısı, setup adımları ve detaylı teknik görevler bir sonraki adımda oluşturulacaktır.
