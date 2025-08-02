// mobile.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MobileService {
  // Mobil özellikleri yöneten servis
  getFeatures() {
    // API veya mock veri ile özellik listesi alınır
    return [
      { name: 'Push Bildirim', description: 'Kullanıcıya anlık bildirim gönderimi.' },
      { name: 'Offline Mod', description: 'İnternet olmadan içerik erişimi.' }
    ];
  }
}
