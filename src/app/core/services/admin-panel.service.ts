import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminPanelService {
  async getUserList(): Promise<any[]> {
    // Demo: Statik veri, ileride Firestore sorguları ile güncellenebilir
    return [
      { id: 'u1', name: 'Admin', email: 'admin@okirem.com', role: 'admin' },
      { id: 'u2', name: 'Öğretmen', email: 'ogretmen@okirem.com', role: 'teacher' },
      { id: 'u3', name: 'Öğrenci', email: 'ogrenci@okirem.com', role: 'student' }
    ];
  }
  async setUserRole(id: string, role: string): Promise<void> {
    // Demo: Gerçek uygulamada Firestore update işlemi yapılacak
    return;
  }
}
