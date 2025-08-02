// blog.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BlogService {
  // Blog servis
  getPosts() {
    // API veya mock veri ile blog yazıları alınır
    return [
      { title: 'Eğitimde Yenilikler', author: 'Admin' },
      { title: 'Motivasyon', author: 'Ali' }
    ];
  }
}
