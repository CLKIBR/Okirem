// device-integration.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DeviceIntegrationService {
  // Donanım entegrasyonlarını yöneten servis
  getDevices() {
    // API veya mock veri ile cihaz listesi alınır
    return [
      { name: 'Akıllı Tahta', type: 'Eğitim Donanımı' },
      { name: 'Tablet', type: 'Mobil Cihaz' }
    ];
  }
}
