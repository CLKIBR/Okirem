import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RoleManagementService {
  async getRoles(): Promise<string[]> {
    // Demo: Statik rol listesi, ileride Firestore'dan alınabilir
    return ['admin', 'teacher', 'student', 'parent'];
  }
  async getUserRole(userId: string): Promise<string> {
    // Demo: Statik rol, ileride Firestore sorgusu ile alınabilir
    return 'student';
  }
  async setUserRole(userId: string, role: string): Promise<void> {
    // Demo: Gerçek uygulamada Firestore update işlemi yapılacak
    return;
  }
}
