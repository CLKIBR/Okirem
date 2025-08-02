// advanced-report-list.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-report-list',
  templateUrl: './advanced-report-list.html',
  styleUrls: ['./advanced-report-list.scss'],
  imports: [CommonModule]
})
export class AdvancedReportListComponent {
  // Gelişmiş raporlar listesi
  reports: { title: string; summary: string }[] = [];

  constructor() {
    // Rapor verileri burada alınacak
  }
}
