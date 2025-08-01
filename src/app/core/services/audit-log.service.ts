import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuditLogService {
  async logAction(userId: string, action: string, details: any): Promise<void> {
    // Demo: Gerçek uygulamada Firestore'a log kaydı eklenir
    return;
  }
  async getLogs(): Promise<any[]> {
    // Demo: Statik log listesi, ileride Firestore'dan alınabilir
    return [
      { userId: 'u1', action: 'login', details: {}, date: new Date() },
      { userId: 'u2', action: 'role-change', details: { role: 'admin' }, date: new Date() }
    ];
  }
}
