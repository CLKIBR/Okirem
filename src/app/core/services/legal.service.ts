// legal.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LegalService {
  // Yasal belgeleri yöneten servis
  getDocuments() {
    // API veya mock veri ile belge listesi alınır
    return [
      { title: 'Gizlilik Politikası', description: 'Kullanıcı verilerinin korunması.' },
      { title: 'Kullanım Şartları', description: 'Platformun kullanım kuralları.' }
    ];
  }
}
