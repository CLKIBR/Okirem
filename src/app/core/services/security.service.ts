import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SecurityService {
  async checkPermissions(userId: string, action: string): Promise<boolean> {
    // Demo: Statik yetki kontrolü, ileride Firestore'dan alınabilir
    if (userId === 'admin') return true;
    if (action === 'view') return true;
    return false;
  }
  async getActiveSessions(): Promise<any[]> {
    // Demo: Statik oturum listesi
    return [
      { userId: 'u1', device: 'Chrome', lastActive: new Date() },
      { userId: 'u2', device: 'Mobile', lastActive: new Date() }
    ];
  }
  async logSuspiciousActivity(userId: string, details: any): Promise<void> {
    // Demo: Gerçek uygulamada Firestore'a log kaydı eklenir
    return;
  }
}
