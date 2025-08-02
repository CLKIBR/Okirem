// forum.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ForumService {
  // Forum servis
  getTopics() {
    // API veya mock veri ile forum başlıkları alınır
    return [
      { title: 'Genel Tartışma', posts: 42 },
      { title: 'Ders Soruları', posts: 18 }
    ];
  }
}
