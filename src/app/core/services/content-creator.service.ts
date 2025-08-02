// content-creator.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentCreatorService {
  // İçerik üretici paneli servis
  getCreators() {
    // API veya mock veri ile içerik üreticiler alınır
    return [
      { name: 'Mehmet', role: 'Video Üretici' },
      { name: 'Zeynep', role: 'Makale Üretici' }
    ];
  }
}
