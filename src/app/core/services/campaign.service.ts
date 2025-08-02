// campaign.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CampaignService {
  // Kampanya/promosyon verilerini yöneten servis
  getCampaigns() {
    // API veya mock veri ile kampanya listesi alınır
    return [
      { name: 'Yaz İndirimi', description: 'Tüm kurslarda %30 indirim!' },
      { name: 'Arkadaşını Getir', description: 'Arkadaşınla kaydol, ekstra ödül kazan!' }
    ];
  }
}
