export interface UserForRegisterRequest {
  // Kişisel Bilgiler
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  birthDate?: Date;
  gender?: string; // GenderType enumu string olarak bekleniyor
  address?: string;
  nationalId?: string;
  profileImageUrl?: string;
  registrationDate?: Date;
  isActive?: boolean;
  lastLoginDate?: Date;
  institution?: string;
  position?: string; // PositionType enumu string olarak bekleniyor
  preferredLanguage?: string; // LanguageType enumu string olarak bekleniyor
  bio?: string;
  socialLinks?: string;
  // Oyunlaştırma Bilgileri
  experiencePoints?: number;
  level?: number;
  badgeCount?: number;
  coin?: number;
  achievementCount?: number;
  streak?: number;
  rank?: number;
  completedQuests?: number;
  currentQuest?: string;
  progress?: number;
  totalLoginCount?: number;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
}