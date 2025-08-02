// pwa.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PwaService {
  // PWA özelliklerini yöneten servis
  getFeatures() {
    // API veya mock veri ile özellik listesi alınır
    return [
      { name: 'Offline Desteği', description: 'İnternet olmadan içerik erişimi.' },
      { name: 'Ana Ekrana Ekle', description: 'Uygulamayı ana ekrana ekleme imkanı.' }
    ];
  }
}
