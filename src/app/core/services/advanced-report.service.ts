// advanced-report.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdvancedReportService {
  // Gelişmiş raporları yöneten servis
  getReports() {
    // API veya mock veri ile rapor listesi alınır
    return [
      { title: 'Kullanıcı Aktivitesi', summary: 'Platformdaki kullanıcı hareketleri.' },
      { title: 'Ders Tamamlama', summary: 'Kurs tamamlama oranları.' }
    ];
  }
}
