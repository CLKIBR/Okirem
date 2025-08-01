import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReportService {
  async getUserReport(): Promise<any[]> {
    // Demo: Statik veri, ileride Firestore'dan alınabilir
    return [
      { id: 'u1', name: 'Admin', activity: 'Giriş', date: new Date() },
      { id: 'u2', name: 'Öğretmen', activity: 'Ders ekledi', date: new Date() }
    ];
  }
  async getLessonReport(): Promise<any[]> {
    return [
      { id: 'l1', title: 'Matematik', completed: 22 },
      { id: 'l2', title: 'Fen Bilimleri', completed: 18 }
    ];
  }
  async getTaskReport(): Promise<any[]> {
    return [
      { id: 't1', title: 'Ödev 1', completed: 60 },
      { id: 't2', title: 'Proje 2', completed: 40 }
    ];
  }
  async getRewardReport(): Promise<any[]> {
    return [
      { id: 'r1', title: 'Yıldız', earned: 10 },
      { id: 'r2', title: 'Rozet', earned: 5 }
    ];
  }
}
