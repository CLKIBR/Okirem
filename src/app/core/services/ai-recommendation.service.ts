// ai-recommendation.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AiRecommendationService {
  // AI öneri sistemi servis
  getRecommendations() {
    // API veya mock veri ile öneriler alınır
    return [
      { title: 'Kişiselleştirilmiş Kurs', score: 95 },
      { title: 'Popüler Eğitim', score: 88 }
    ];
  }
}
