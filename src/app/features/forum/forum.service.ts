import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ForumService {
  getForums() {
    // API entegrasyonu ile forum başlıklarını çeker
    return Promise.resolve([
      { id: 1, title: 'Genel Tartışma' },
      { id: 2, title: 'Ders Soruları' },
      { id: 3, title: 'Öneri ve Geri Bildirim' }
    ]);
  }
}
