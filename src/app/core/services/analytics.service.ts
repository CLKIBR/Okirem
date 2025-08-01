import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  async getAllStats(): Promise<any> {
    // Demo: Statik veri, ileride Firestore sorguları ile güncellenebilir
    return {
      userStats: { total: 120, active: 95 },
      lessonStats: { total: 30, completed: 22 },
      taskStats: { total: 80, completed: 60 },
      rewardStats: { total: 15, earned: 10 }
    };
  }
}
