import { exportReportsToCSV } from './report-dashboard.export';

import {
  Component,
  signal,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../../core/services/report.service';

@Component({
  selector: 'app-report-dashboard',
  imports: [CommonModule],
  templateUrl: './report-dashboard.html',
  styleUrl: './report-dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDashboardComponent {
  userReport = signal<any[]>([]);
  lessonReport = signal<any[]>([]);
  taskReport = signal<any[]>([]);
  rewardReport = signal<any[]>([]);
  error = signal<string | null>(null);
  protected reportService = inject(ReportService);

  ngOnInit() {
    this.loadReports();
  }

  async loadReports() {
    try {
      this.userReport.set(await this.reportService.getUserReport());
      this.lessonReport.set(await this.reportService.getLessonReport());
      this.taskReport.set(await this.reportService.getTaskReport());
      this.rewardReport.set(await this.reportService.getRewardReport());
      this.error.set(null);
    } catch (err: any) {
      this.error.set('Raporlar yüklenemedi: ' + (err?.message || err));
    }
  }
  async exportCSV() {
    const csv = await exportReportsToCSV(this.reportService);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'raporlar.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
