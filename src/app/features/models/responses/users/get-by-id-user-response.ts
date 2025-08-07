export interface GetByIdUserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber?: string;
  birthDate?: Date;
  gender?: string; // GenderType
  address?: string;
  nationalId?: string;
  profileImageUrl?: string;
  registrationDate?: Date;
  isActive?: boolean;
  lastLoginDate?: Date;
  institution?: string;
  position?: string; // PositionType
  preferredLanguage?: string; // LanguageType
  bio?: string;
  socialLinks?: string;
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