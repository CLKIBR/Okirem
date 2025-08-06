USERS ENTİTİES DOSYA İÇERİGİ
    using NArchitecture.Core.Security.Entities;

    namespace Domain.Entities;

    public enum GenderType
    {
        NotSpecified = 0,
        Male = 1,
        Female = 2,
        Other = 3
    }

    public enum LanguageType
    {
        NotSpecified = 0,
        Turkish = 1,
        English = 2,
        German = 3,
        French = 4
    }

    public enum PositionType
    {
        NotSpecified = 0,
        Student = 1,
        Teacher = 2,
        Admin = 3,
        Parent = 4,
        Other = 5
    }

    public class User : User<Guid>
    {
        // Kişisel Bilgiler
        public string FirstName { get; set; } // Ad
        public string LastName { get; set; } // Soyad
        public string PhoneNumber { get; set; } // Telefon
        public DateTime? BirthDate { get; set; } // Doğum tarihi
        public GenderType Gender { get; set; } // Cinsiyet
        public string Address { get; set; } // Adres
        public string NationalId { get; set; } // TC Kimlik No
        public string ProfileImageUrl { get; set; } // Profil fotoğrafı
        public DateTime RegistrationDate { get; set; } // Kayıt tarihi
        public bool IsActive { get; set; } // Aktiflik durumu
        public DateTime? LastLoginDate { get; set; } // Son giriş tarihi
        public string Institution { get; set; } // Kurum/okul/şirket
        public PositionType Position { get; set; } // Pozisyon
        public LanguageType PreferredLanguage { get; set; } // Tercih edilen dil
        public string Bio { get; set; } // Kısa özgeçmiş/açıklama
        public string SocialLinks { get; set; } // Sosyal medya bağlantıları (JSON veya string)
        // Oyunlaştırma Bilgileri
        public int ExperiencePoints { get; set; } // XP
        public int Level { get; set; } // Seviye
        public int BadgeCount { get; set; } // Rozet sayısı
        public int Coin { get; set; } // Sanal para
        public int AchievementCount { get; set; } // Başarımlar
        public int Streak { get; set; } // Günlük giriş serisi
        public int Rank { get; set; } // Sıralama
        public int CompletedQuests { get; set; } // Tamamlanan görev sayısı
        public string CurrentQuest { get; set; } // Aktif görev adı/id
        public double Progress { get; set; } // Genel ilerleme yüzdesi
        public int TotalLoginCount { get; set; } // Toplam giriş sayısı
        public bool IsEmailVerified { get; set; } // E-posta doğrulama durumu
        public bool IsPhoneVerified { get; set; } // Telefon doğrulama durumu

        public virtual ICollection<UserOperationClaim> UserOperationClaims { get; set; } = default!;
        public virtual ICollection<RefreshToken> RefreshTokens { get; set; } = default!;
        public virtual ICollection<OtpAuthenticator> OtpAuthenticators { get; set; } = default!;
        public virtual ICollection<EmailAuthenticator> EmailAuthenticators { get; set; } = default!;
    }

API ENDPOİNTLERİ

    1. POST /api/Auth/Login 
        Request body: application/json
        {
        "email": "clkibrahim@outlook.com",
        "password": "Umut1357",
        "authenticatorCode": "string"
        }

        Curl:
        curl -X 'POST' \
            'http://localhost:60805/api/Auth/Login' \
            -H 'accept: */*' \
            -H 'Content-Type: application/json' \
            -d '{
            "email": "clkibrahim@outlook.com",
            "password": "Umut1357",
            "authenticatorCode": "string"
            }'

       Request URL : 
       http://localhost:60805/api/Auth/Login
       
    2. POST /api/Auth/Register

        Request body: application/json
        {
        "email": "clkirem_27@outlook.com",
        "password": "Umut1357@",
        "firstName": "İrem",
        "lastName": "Çelik",
        "gender": 2,
        "position": 1,
        "preferredLanguage": 1
        }

        Curl:
        curl -X 'POST' \
            'http://localhost:60805/api/Auth/Register' \
            -H 'accept: */*' \
            -H 'Authorization: Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5NDY5M2JhLWQ3ZWItNDI3My04YTRiLTEwOTI2YTcwNWI4YyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImNsa2licmFoaW1Ab3V0bG9vay5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIm5iZiI6MTc1NDQ3MzkzNSwiZXhwIjoxNzU0NDc0NTM1LCJpc3MiOiJuQXJjaGl0ZWN0dXJlQGtvZGxhbWEuaW8iLCJhdWQiOiJzdGFydGVyUHJvamVjdEBrb2RsYW1hLmlvIn0.w3LUppFSR8biZdUmYtmRU_0IB1psQrOGgwWQx-bIlbKdnzSYPUYuoR8zNX0tFP-OJ2N96Xm1i7w-dDk15okpJw' \
            -H 'Content-Type: application/json' \
            -d '{
            "email": "clkirem_27@outlook.com",
            "password": "Umut1357@",
            "firstName": "İrem",
            "lastName": "Çelik",
            "gender": 2,
            "position": 1,
            "preferredLanguage": 1
            }'

        Request URL :
        http://localhost:60805/api/Auth/Register

    3. GET /api/Auth/RefreshToken
    4. PUT /api/Auth/RevokeToken
    5. GET /api/Auth/EnableEmailAuthenticator
    6. GET /api/Auth/EnableOtpAuthenticator
    7. GET /api/Auth/VerifyEmailAuthenticator
    8. POST /api/Auth/VerifyOtpAuthenticator
    9. GET /api/OperationClaims/{Id}
    10. GET /api/OperationClaims
    11. POST /api/OperationClaims
    12. PUT /api/OperationClaims
    13. DELETE /api/OperationClaims
    14. GET /api/UserOperationClaims/{Id}
    15. GET /api/UserOperationClaims
    16. POST /api/UserOperationClaims
    17. PUT /api/UserOperationClaims
    18. DELETE /api/UserOperationClaims
    19. GET /api/Users/{Id}
    20. GET /api/Users/GetFromAuth
    21. GET /api/Users
    22. POST /api/Users
    23. PUT /api/Users
    24. DELETE /api/Users
    25. PUT /api/Users/FromAuth