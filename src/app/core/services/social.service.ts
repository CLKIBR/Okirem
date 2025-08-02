// social.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SocialService {
  // Sosyal etkileşimleri yöneten servis
  getInteractions() {
    // API veya mock veri ile etkileşim listesi alınır
    return [
      { user: 'Ali', action: 'Yorum yaptı' },
      { user: 'Ayşe', action: 'Beğendi' }
    ];
  }
}
